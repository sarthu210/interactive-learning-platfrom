import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EnrollCours } from '../components';
import { CourseContentCard } from '../components';

export default function JavaPage() {
  const isEnroll = useSelector(state => state.course.isEnroll);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const course = useSelector(state => state.course.name);

  return (
    <div className='p-5 flex flex-col gap-5 mb-10'>
      <EnrollCours />
      {isEnroll && isAuthenticated ? (
        <>
          <CourseContentCard
            title="Introduction"
            subtitle="Java History"
            disc="History of Java with some interesting facts!"
            link="663137e421a4bc31f8370d4d"
            display=""
          />
          <CourseContentCard
            title="Quiz 1"
            subtitle="Introduction Quiz"
            disc="Test your knowledge on Java History"
            link="quize/level-1"
            display={course.Level1 ? "" : "none"}
          />
          <CourseContentCard
            title="Level - 2"
            subtitle="Hello World program"
            disc="Printing Statement in Java"
            link="6631396cafcd02b76cd5ba16"
            display={course.Quize1 ? "" : "none"}
          />
          <CourseContentCard
            title="Quiz 2"
            subtitle="Hello World Quiz"
            disc="Test your knowledge on Hello World program"
            link="quize/level-2"
            display={course.Level2 ? "" : "none"}
          />
          <CourseContentCard
            title="Level - 3"
            subtitle="Java Data-types"
            disc="Learn about Java Data-types"
            link="6631389ace69cbddc31cbb5e"
            display={course.Quize2 ? "" : "none"}
          />
          <CourseContentCard
            title="Quiz 3"
            subtitle="Data-types Quiz"
            disc="Test your knowledge on Java Data-types"
            link="quize/level-3"
            display={course.Level3 ? "" : "none"}
          />
        </>
      ) : null}
    </div>
  );
}