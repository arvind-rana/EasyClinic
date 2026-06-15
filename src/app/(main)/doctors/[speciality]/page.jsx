import React from 'react'
import { redirect } from "next/navigation";
import { PageHeader } from '@/components/page-header';
import { DoctorCard } from '@/components/doctor-card';
import { getDoctorsBySpecialty } from '../../../../../action/doctors-listing';
//import { getDoctorsBySpecialty } from "../../../../../action/doctors-listing";

const SpecialityPage = async({params}) => {
  const {speciality} = await params;
  if (!speciality) {
    redirect("/doctors");
  }
  const { doctors, error } = await getDoctorsBySpecialty(speciality);

  if (error) {
    console.error("Error fetching doctors:", error);
  }
  return (
    <div>
      <PageHeader 
      title={decodeURIComponent(speciality)}
      backLine="/doctors"
      backLabel = "All specialities"
      />
  
        {doctors && doctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
         ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-white mb-2">
            No doctors available
          </h3>
          <p className="text-muted-foreground">
            There are currently no verified doctors in this specialty. Please
            check back later or choose another specialty.
          </p>
        </div>
      )}
    </div>
  )
}

export default SpecialityPage
