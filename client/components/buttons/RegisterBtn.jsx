import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function RegisterBtn() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return !isAuthenticated ?  (
    <Link to="/register">
      <button>Register</button>
    </Link>
  ) : null;
}

