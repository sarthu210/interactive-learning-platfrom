import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector, useDispatch } from 'react-redux';
import { enroll } from '../src/slices/courseReducer';
import { useNavigate } from 'react-router-dom';
import { color } from 'framer-motion';
import { floor, isInteger, round } from 'lodash';

export default function EnrollCours() {
    const navigate = useNavigate();
    const data = {
        "courseId": "661bb5be99a39b4f0853b9ca"
    }

    const [loading, setLoading] = React.useState(false);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    let isEnroll = useSelector(state => state.course.isEnroll);
    let progress = useSelector((state) => state?.course?.name?.progress || 0);
    const dispatch = useDispatch();

    function gotoLogin()
    {
        navigate('/login');
    }

    useEffect(() => {
        if(isEnroll){
            setLoading(true);
        }
    else{
        setLoading(false);}
    },[]);

    const handleEnroll = async () => {
        try{
            toast("Successfully Enrolled")
            await axios.post('http://localhost:3000/course/enroll', data, {withCredentials: true});
            dispatch(enroll({isEnroll: true}));
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
                {isAuthenticated ? <ProgressBar className='mt-5' maxCompleted={90} animateOnRender='true' bgColor='black' completed={Math.round((progress*100)/6)}></ProgressBar> : null}
            </div>
            
            { loading || isEnroll || !isAuthenticated ? null : 
            <div className='flex justify-between items-center p-4 border-t border-gray-200'>
                <button onClick={handleEnroll} className='px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded'>Enroll</button>
                <ToastContainer />
            </div>
            }
            {
                isAuthenticated ? null : <div className='bg-gray-100 text-sm text-center p-2'>Please login to enroll in this course <a onClick={gotoLogin} className='cursor-pointer text-red-600 underline'>login here</a></div> 
            }
            
        </div>
    </div>
  )
}
