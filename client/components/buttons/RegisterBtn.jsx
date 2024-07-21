import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function RegisterBtn() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return !isAuthenticated ?  (
    <Link to="/register">
      <button className='mr-4 mt-4 border-[1px] rounded-lg hover:bg-black hover:text-white border-black p-3 px-5'>Register</button>
    </Link>
  ) : null;
}

