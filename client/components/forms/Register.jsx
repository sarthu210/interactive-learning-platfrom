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

    <div className='min-[1080px]:flex max-[750px]:flex-wrap lg:flex-nowrap flex-row justify-evenly border rounded-lg'>
        <div className='lg:w-1/2 lg:m-10'>
        <form onSubmit={handleSubmit(onSubmit)} className='login-form flex flex-col gap-0' noValidate>
      <h1 className="text-2xl font-bold mb-10 text-center ">Register</h1>
      
      <label htmlFor="email">Name:</label>
          <input type='text' {...register('name' , {
            required: {
              value: true,
              message: 'Name is required'
            }
          })} className="border border-gray-300 p-2 mb-2" />
        
       
          <label htmlFor="email">Email:</label>
          <input type='email' {...register('email' , {
            pattern:{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            },
          })} className="border border-gray-300 p-2 mb-2" />
       
     
          <label htmlFor="password">Password:</label>
          <input type='password' {...register('password' , {
            required: {
              value: true,
              message: 'Password is required'
            }
          })} className="border border-gray-300 p-2 mb-2" />
        
          <label htmlFor="passoutyear">Passout Year:</label>
          <select {...register('passoutyear',{
            required: {
              value: true,
              message: 'Passout year is required'
            }
          })} className="border border-gray-300 p-2 mb-2" >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2023">2024</option>
            <option value="2023">2025</option>
            <option value="2023">2026</option>
          </select>
        
          <label htmlFor="branch">Branch:</label>
          <select {...register('branch',{
            required: {
              value: true,
              message: 'Branch is required'
            }
          })} className="border border-gray-300 p-2 mb-2" >
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EE">EE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
          </select>
      
        <button className="bg-black hover:bg-white hover:text-black hover:border hover:border-black text-white font-bold py-2 px-4">Submit</button>
        <p className='text-black'>If not already register? <a href='/login' className='text-red-600'>login here</a></p>
      </form>
    </div>
    <div className='w-full max-[750px]:hidden opacity-90 bg-black bg-opacity-50 bg-blend-overlay h-[600px] bg-[url("https://images.unsplash.com/photo-1606166325683-e6deb697d301?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
            <div className='m-10 flex flex-col gap-2'>
                <h1 className=' text-white text-[55px]'>EduHub</h1>
                <p className=' text-white text-[16px]'>Learn and grow with us 
                Dedicated <br/> platform for learning <br/>
                Get started today!
                </p>
            </div>
    </div>

    </div>
  )
}
