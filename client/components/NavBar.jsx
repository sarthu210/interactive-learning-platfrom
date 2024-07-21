import React from 'react';
import { useState } from 'react';
import { LoginBtn, UserLogout, RegisterBtn, ProfileBtn } from './index';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function gotoHome(){
    navigate('/')
  }

  function gotoCourses(){
    navigate('/courses')
  }

  return (

    <nav className='flex items-center flex-wrap bg-[#f8f9fa] p-6 justify-between'>
      <div className='flex items-center flex-shrink-0 text-black mr-6'>
        <a href="/" className='font-semibold text-xl tracking-tight'>EduHub</a>
      </div>
      <div className='block lg:hidden'>
      <button onClick={() => setIsOpen(!isOpen)} className='flex items-center px-3 py-2 border rounded text-black border-black'>
  {!isOpen ? 
    <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Menu</title><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z'/></svg> 
    : 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='h-3 w-3'>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  }
</button>
      </div>
      <div className={`w-full  flex lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
        <div className='text-sm lg:flex-grow '>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-black mr-4' onClick={gotoHome}>Home</button>
          <button className='block mt-4 lg:inline-block lg:mt-0 text-black mr-4' onClick={gotoCourses}>Courses</button>
          <LoginBtn className="mr-4 mt-4" />
          <RegisterBtn />
          <ProfileBtn />
          <UserLogout />
        </div>
      </div>
      
    </nav>
  );
}
