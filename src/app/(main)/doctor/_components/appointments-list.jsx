"use client";

import { Calendar } from "lucide-react";
import { AppointmentCard } from "@/components/appointment-card";

export default function DoctorAppointmentsList({ appointments = [] }) {
  if (!appointments.length) {
    return (
      <div className="rounded-md border border-border bg-muted/20 p-8 text-center">
        <Calendar className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
        <h3 className="text-lg font-semibold text-white">No appointments yet</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Scheduled patient appointments will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          userRole="DOCTOR"
        />
      ))}
    </div>
  );
}
