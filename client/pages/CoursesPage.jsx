import React from 'react'
import { CourseCard } from '../components';
import {CourseContentCard} from '../components';

export default function CoursesPage() {
  return (
    <div>
        <div className=' flex m-10 gap-10'>
            <CourseCard category="coding" course="Basic JAVA" discrip="History, Data types, Condtional Statments, loops" img='url("https://www.sipexe.com/assets/courses/Java.jpg")' />
        </div>
    </div>
  )
}
