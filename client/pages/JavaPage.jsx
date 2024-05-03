import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EnrollCours } from '../components'
import { CourseContentCard } from '../components'
export default function JavaPage() {

  const isEnroll = useSelector(state => state.course.isEnroll);
  const course = useSelector(state => state.course.name);
  return (
    <div className='p-5 flex flex-col gap-5 mb-10'>
        <EnrollCours></EnrollCours>
            {isEnroll ? <CourseContentCard title="Introduction" subtitle="Java History" disc="History of Java with some interesting facts!" link="663137e421a4bc31f8370d4d" display=""></CourseContentCard> : null}
            {isEnroll ? <CourseContentCard title="Level - 1" subtitle="Java Data-types" disc="History of Java with some interesting facts!" display={course.Level1 ? "" : "none"}></CourseContentCard> : null}
    </div>
  )
}
