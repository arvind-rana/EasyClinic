import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge, Calendar, Star,User } from 'lucide-react'
import {Link} from 'next/link'
import { Button } from './ui/button'

 
export function DoctorCard({doctor})  {
  return (
    <Card className="border-emerald-900/20 hover: border-emerald-700/40 transition-all">
    <CardContent className='p-4'>
      <div  className='flex itme-center gap-4'>
        <div  className='w-12 h-12 rounded-full bg-emerald-900/20 flex item-center justify-center flex-shrink-0'>
        {
            doctor.imgUrl ? (
              <img 
              src={doctor.imageUrl}
              alt={doctor.name}
              className='w-12 h-12 rounded-full object-cover'
              />
            ):(
             <User className="h-4 w-4 text-emerald-400"/>
            )}
        </div>

        <div>
            <div className='flex flex-col sm:flex-row sm:item-center sm:justify-between gap-2 mb-2'>
               <h3 className='font-medium text-lg text-white'>
                 {doctor.name}
               </h3>
               <Badge variant="outline">
                <Star className='h-3 w-3 mr-1'>
                  Varified
                </Star>
               </Badge>
            </div>
            <p className='text-sm text-muted-foreground mb-1'>
                {doctor.spaciality} . {doctor.experience} year experience
            </p>
            <div className='mt-4 line-clamp-3 text-sm text-muted-foreground'> {doctor.description}</div>
            <Button
            asChild
            className="w-full">
               <Link href={`/doctors/${doctor.speciality}/${doctor.id}`}> 
               <Calendar className='h-4 w-4 mr-2'/>
               View profile and Book
               </Link> 
            </Button>
        </div>
      </div>
    </CardContent>
    </Card>
  )
}


