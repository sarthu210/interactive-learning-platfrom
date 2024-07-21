import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { CodeEditor, TherorySpace } from '../components/index'
import { useDispatch, useSelector } from 'react-redux';
import { setLevel } from '../src/slices/levlesReducer';
import axios from 'axios';

export default function LevelPage() {
  const [loading, setLoading] = React.useState(true);
  const { levelId } = useParams();

  const dispatch = useDispatch();

  useEffect (() => {
    axios.get(`http://localhost:3000/level/${levelId}`, { withCredentials: true })
    .then((response) => {
      dispatch(setLevel(response.data))
    })
    .catch((error) => {
      if (error.response && error.response.status !== 401) {
          console.log("Error:", error.message);
      }
    })
  }, [])
  const data = useSelector(state => state.levels.levels);
  
  return (
    <>
    <a href='/courses/java'><button className='bg-black h-10 w-32 text-white'>Back</button></a>
        <div className='flex flex-wrap max-[750px]:flex max-[750px]:flex-col mt-5 max-[750px]:mb-10'>
            
            <div className='w-[30%] max-[750px]:w-[100%] border-r-8'>
                <TherorySpace title={data ? data.title : ''} subtitle={data ? data.subtitle : ''}  theroyp1={data? data.theroy.p1 : ''} theroyp2={data? data.theroy.p2 : ''} theroyp3={data? data.theroy.p3 : ''} />
            </div> 
            <div className='w-[70%] max-[750px]:w-[100%] border-r-8 overflow-hidden'>
                <CodeEditor />
            </div>
        </div>
    </>
  )
}
