import React from 'react'

export default function CodeOutput(props) {
  return (
    <>
        <div className='  flex flex-col overflow-hidden'>
            <h1 className='text-2xl font-bold mb-10 text-center '>Output</h1>
            <div className='p-4 bg-gray-300'>
                <p className='text-gray-800'>{props.output}</p>
                <p className='text-gray-800'>{props.satuscode}</p>
                <p className='text-gray-800'>{props.memory}</p>
                <p className='text-gray-800'>{props.cpuTime}</p>
            </div>
        </div>
    </>
  )
}
