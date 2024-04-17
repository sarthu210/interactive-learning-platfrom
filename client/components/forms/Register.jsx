import React from 'react';
import axios from 'axios';
import { login } from '../../src/slices/authReducer';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function Register() {
  const {register, handleSubmit, getFieldState} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  React.useEffect(() => {
          if (isAuthenticated) {
              navigate('/');
          }
      }, [isAuthenticated, navigate]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', data, { withCredentials: true });
      dispatch(login(response.data));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="email">Name:</label>
          <input type='text' {...register('name' , {
            required: {
              value: true,
              message: 'Name is required'
            }
          })} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type='email' {...register('email' , {
            pattern:{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            },
          })}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type='password' {...register('password' , {
            required: {
              value: true,
              message: 'Password is required'
            }
          })}/>
        </div>
        <div>
          <label htmlFor="passoutyear">Passout Year:</label>
          <select {...register('passoutyear',{
            required: {
              value: true,
              message: 'Passout year is required'
            }
          })}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2023">2024</option>
            <option value="2023">2025</option>
            <option value="2023">2026</option>
          </select>
        </div>
        <div>
          <label htmlFor="branch">Branch:</label>
          <select {...register('branch',{
            required: {
              value: true,
              message: 'Branch is required'
            }
          })}>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EE">EE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
