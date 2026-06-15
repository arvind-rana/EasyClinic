import { Award, Coins, Stethoscope, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function DoctorCard({ doctor }) {
  return (
    <Card className="border-emerald-900/20 hover:border-emerald-700/40 transition-all">
      <CardContent className="p-5">
        <div className="flex gap-4">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-emerald-900/20 flex items-center justify-center">
            {doctor.imageUrl ? (
              <img
                src={doctor.imageUrl}
                alt={doctor.name ? `Dr. ${doctor.name}` : "Doctor"}
                className="h-full w-full object-cover"
              />
            ) : (
              <UserRound className="h-8 w-8 text-emerald-400" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-white">
                  Dr. {doctor.name || "Unnamed Doctor"}
                </h3>
                <p className="mt-1 flex items-center text-sm text-muted-foreground">
                  <Stethoscope className="mr-1.5 h-4 w-4 text-emerald-400" />
                  {doctor.specialty}
                </p>
              </div>

              <Badge
                variant="outline"
                className="border-emerald-900/30 bg-emerald-900/20 text-emerald-400"
              >
                Verified
              </Badge>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="flex items-center">
                <Award className="mr-1.5 h-4 w-4 text-emerald-400" />
                {doctor.experience ?? 0} years experience
              </div>
              <div className="flex items-center">
                <Coins className="mr-1.5 h-4 w-4 text-emerald-400" />
                {doctor.credits ?? 0} credits available
              </div>
            </div>

            {doctor.description && (
              <p className="mt-4 line-clamp-3 text-sm text-muted-foreground">
                {doctor.description}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
