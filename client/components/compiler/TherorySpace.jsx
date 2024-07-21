import React from 'react'

export default function TherorySpace(props) {
  return (
    <>
        <div className='bg-white flex flex-col h-[590px] overflow-y-auto sc'>
            <h1 className='text-2xl font-bold mb-10 text-center '>{props.title}</h1>
            <h2 className='text-xl font-bold mb-10 text-center '>{props.subtitle}</h2>
            <div className='p-4'>
                <p className='text-gray-800'>{props.theroyp1}</p>
                <p className='text-gray-800'>{props.theroyp2}</p>
                <p className='text-gray-800'>{props.theroyp3}</p>
            </div>
        </div>
    </>
  )
}
