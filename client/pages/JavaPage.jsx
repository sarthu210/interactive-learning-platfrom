import React from 'react'
import { EnrollCours } from '../components'
import { CourseContentCard } from '../components'
export default function JavaPage() {
  return (

    <div className='p-5 flex flex-col gap-5 mb-10'>
        <EnrollCours></EnrollCours>
        
            <CourseContentCard title="Introduction" subtitle="Java History" disc="History of Java with some interesting facts!" ></CourseContentCard>
       
            <CourseContentCard title="Level - 1" subtitle="Java Data-types" disc="History of Java with some interesting facts!"></CourseContentCard>
    </div>
  )
}
