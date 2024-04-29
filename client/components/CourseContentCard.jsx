import React from 'react'

export default function CourseContentCard(props) {
  return (
    <div className=''>
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <div className='p-4'>
                <p className='font-semibold text-gray-600 text-sm'>{props.title}</p>
                <p className='text-2xl text-gray-800'>{props.subtitle}</p>
                <p className='text-gray-400'>{props.disc}</p>
            </div>
            
            <div className='flex justify-between items-center p-4 border-t border-gray-200'>
                <button className='px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded'>Go To</button>
            </div>
        </div>
    </div>
  )
}
