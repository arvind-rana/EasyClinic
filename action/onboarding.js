"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { checkUser } from "@/lib/checkUser";

/**
 * Sets the user's role and related information
 */
export async function setUserRole(formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Find user in our database or create if missing
  let user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    user = await checkUser();
  }

  if (!user) throw new Error("User not found in database");

  // Handle both FormData object and plain JS object
  let role, specialty, experience, credentialUrl, description;

  if (formData && typeof formData.get === "function") {
    role = formData.get("role");
    specialty = formData.get("specialty");
    experience = formData.get("experience") ? parseInt(formData.get("experience"), 10) : undefined;
    credentialUrl = formData.get("credentialUrl");
    description = formData.get("description");
  } else if (formData && typeof formData === "object") {
    role = formData.role;
    specialty = formData.specialty;
    experience = formData.experience !== undefined && formData.experience !== null ? parseInt(formData.experience, 10) : undefined;
    credentialUrl = formData.credentialUrl;
    description = formData.description;
  }

  if (!role || !["PATIENT", "DOCTOR"].includes(role)) {
    throw new Error("Invalid role selection");
  }

  try {
    // For patient role - simple update
    if (role === "PATIENT") {
      await db.user.update({
        where: {
          clerkUserId: userId,
        },
        data: {
          role: "PATIENT",
        },
      });

      revalidatePath("/");
      return { success: true, redirect: "/doctors" };
    }

    // For doctor role - need additional information
    if (role === "DOCTOR") {
      // Validate inputs
      if (!specialty || experience === undefined || isNaN(experience) || !credentialUrl || !description) {
        throw new Error("All fields are required and experience must be a valid number");
      }

      await db.user.update({
        where: {
          clerkUserId: userId,
        },
        data: {
          role: "DOCTOR",
          specialty,
          experience,
          credentialUrl,
          description,
          verificationStatus: "PENDING",
        },
      });

      revalidatePath("/");
      return { success: true, redirect: "/doctor/verification" };
    }
  } catch (error) {
    console.error("Failed to set user role:", error);
    throw new Error(`Failed to update user profile: ${error.message}`);
  }
}

/**
 * Gets the current user's complete profile information
 */
export async function getCurrentUser() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  try {
    let user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user) {
      user = await checkUser();
    }

    return user;
  } catch (error) {
    console.error("Failed to get user information:", error.message);
    return null;
  }
}
