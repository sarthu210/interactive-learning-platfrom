import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function EnrollCours() {
    
    const data = {
        "courseId": "661bb5be99a39b4f0853b9ca"
    }

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isEnroll = useSelector(state => state.course.isEnroll);

    const enroll = async () => {
        try{
            await axios.post('http://localhost:3000/course/enroll', data, {withCredentials: true});
            toast("Course Enrolled!");
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div>
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <div className='bg-cover bg-center h-56 p-4' style={{backgroundImage: 'url("https://www.sipexe.com/assets/courses/Java.jpg")'}}></div>
            <div className='p-4'>
                <p className='font-semibold text-gray-600 text-sm'>Coding</p>
                <p className='text-2xl text-gray-800'>Basic JAVA</p>
                <p className='text-gray-400'>History, Data types, Condtional Statments, loops</p>
            </div>
            
            { !isEnroll ? null : 
            <div className='flex justify-between items-center p-4 border-t border-gray-200'>
                <button onClick={enroll} className='px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded'>Enroll</button>
                <ToastContainer />
            </div>
            }
            {
                isAuthenticated ? null : <div className='bg-gray-100 text-sm text-center p-2'>Please login to enroll in this course <a href='/login' className=' text-red-600 underline'>login here</a></div> 
            }
        </div>
    </div>
  )
}
