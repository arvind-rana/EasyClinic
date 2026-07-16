
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,

  } from '@clerk/nextjs'
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { checkUser } from "@/lib/checkUser";
import {
  Calendar,
  CreditCard,
  ShieldCheck,
  Stethoscope,
  User,
} from "lucide-react";
import { checkAndAllocateCredits } from "../../action/credits";

const Header = async () => {
  
   const user = await checkUser();
   if (user?.role === "PATIENT") {
    await checkAndAllocateCredits(user);
  }

  return (
    <header
      className="fixed w-full top-0 border-b bg-background/80 backdrop-blur-md  z-10 
    supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container mx-auto px-2 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={60}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-2">
          <SignedIn>
           
           {/* Admin Links */}
           {user?.role === "ADMIN" && (
              <>
                <Button
                  asChild
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <Link href="/admin">
                    <ShieldCheck className="h-4 w-4" />
                    Admin Dashboard
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Link href="/admin">
                    <ShieldCheck className="h-4 w-4" />
                  </Link>
                </Button>
              </>
            )}

            {/* Doctor Links */}
            {user?.role === "DOCTOR" && (
              <>
                <Button
                  asChild
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <Link href="/doctor">
                    <Stethoscope className="h-4 w-4" />
                    Doctor Dashboard
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Link href="/doctor">
                    <Stethoscope className="h-4 w-4" />
                  </Link>
                </Button>
              </>
            )}

            {/* Patient Links */}
            {user?.role === "PATIENT" && (
              <>
                <Button
                  asChild
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <Link href="/appointments">
                    <Calendar className="h-4 w-4" />
                    My Appointments
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Link href="/appointments">
                    <Calendar className="h-4 w-4" />
                  </Link>
                </Button>
              </>
            )}


            {
              user?.role === "UNASSIGNED" && (
              <>
                <Button
                  asChild
                  variant="outline"
                  className="hidden md:inline-flex items-center gap-2"
                >
                  <Link href="/onboarding">
                    <User className="h-4 w-4"/>
                    Complete Profile
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Link href="/onboarding">
                    <User className="h-4 w-4"/>
                  </Link>
                </Button>
              </>
              )
            }
          </SignedIn>

          {(!user || user?.role !== "ADMIN") && (
            <Badge
              asChild
              variant="outline"
              className="h-9 bg-emerald-900/20 border-emerald-700/30 px-3 py-1 flex items-center gap-2"
            >
              <Link href={user?.role === "PATIENT" ? "/pricing" : "/doctor"}>
                <CreditCard className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">
                  {user && user.role !== "ADMIN" ? (
                    <>
                      {user.credits}{" "}
                      <span className="hidden md:inline">
                        {user?.role === "PATIENT"
                          ? "Credits"
                          : "Earned Credits"}
                      </span>
                    </>
                  ) : (
                    <>Pricing</>
                  )}
                </span>
              </Link>
            </Badge>
          )}

          <SignedOut>
            <SignInButton>
                <Button variant="secondary">Sign In</Button>
            </SignInButton>
            
        </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
