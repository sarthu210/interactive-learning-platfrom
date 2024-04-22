import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function (props) {

    const isEnroll = useSelector(state => state.course.isEnroll);
    
  return (
    <div>
        <div>
            <div className='bg-white shadow-md rounded-lg overflow-hidden'>
                <div className='bg-cover bg-center h-56 p-4' style={{backgroundImage: props.img}}></div>
                <div className='p-4'>
                    <p className='font-semibold text-gray-600 text-sm'>{props.category}</p>
                    <p className='text-2xl text-gray-800'>{props.course}</p>
                    <p className='text-gray-400'>{props.discrip}</p>
                </div>
                <div className='flex justify-between items-center p-4 border-t border-gray-200'>
                    <Link to="/courses/java"><button className='px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded'>View Course</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
