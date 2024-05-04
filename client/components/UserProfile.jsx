import React from 'react'
import { useSelector } from 'react-redux'

export default function UserProfile() {
    const user = useSelector(state => state.auth.user);
    
  return (
    <div>
        <div className='bg-white shadow-md rounded-lg overflow-hidden m-20'>
            <div className='p-4 flex flex-col gap-2'>
                <p className='font-semibold text-gray-600 text-sm'>Name: </p>
                <p className='text-2xl text-gray-800'>{user ? user.user : null}</p>
                <p className='text-gray-600'>Email: </p>
                <p className='text-2xl text-gray-800'>{user ? user.email : null}</p>
                <p className='text-gray-600'>Passout Year: </p>
                <p className='text-2xl text-gray-800'>{user ? user.passoutyear : null}</p>
                <p className='text-gray-600'>Branch: </p>
                <p className='text-2xl text-gray-800'>{user ? user.branch : null}</p>
            </div>
        </div>
    </div>
  )
}
