import React from 'react';
import axios from 'axios';
import { login } from '../../src/slices/authReducer';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit, formState} = useForm();
    const {errors} = formState;
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // replace with your actual selector

    const [error , setError] = React.useState("");
    
    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/auth/login", data, { withCredentials: true });
            dispatch(login(response.data));
            navigate("/");
            // Set a timeout to clear local storage after 1 hour
        setTimeout(() => {
            localStorage.clear();
        }, 60 * 60 * 1000); // 60 minutes * 60 seconds * 1000 milliseconds
        } catch (error) {
            setError(error.response.data);
        }
    }

return (
    <div className='min-[1080px]:flex max-[750px]:flex-wrap lg:flex-nowrap flex-row justify-evenly border rounded-lg'>
        <div className='lg:w-1/2 lg:m-10'>
        <form onSubmit={handleSubmit(onSubmit)} className='login-form flex flex-col m-20 gap-2'>
        <h1 className="text-2xl font-bold mb-10 text-center ">Login</h1>
            <input
                type="email"
                placeholder="Your email"
                {...register("username",{
                    required:{
                        value:true,
                        message:"Please enter your email"
                    },
                    pattern:{
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                    }
                })}
                className="border border-gray-300 p-2 mb-2"
            />
            <p className=' text-red-600'>{errors.username?.message}</p>

            <input
                type="password"
                placeholder="Your Password"
                {...register("password", {
                    required: {
                        value: true,
                        message: "Please enter your password"
                    }
                
                })}
                className="border border-gray-300 p-2 mb-2"
            />
            <p className=' text-red-600'>{errors.password?.message}</p>

            <button
                type="submit"
                className="bg-black hover:bg-white hover:text-black hover:border hover:border-black text-white font-bold py-2 px-4"
            >
                Login
            </button>
            <p className='text-black'>If not register? <a href='/register' className='text-red-600'>register here</a></p>
        </form>
    </div>
    <div className='w-full max-[750px]:hidden opacity-90 bg-black bg-opacity-50 bg-blend-overlay h-[600px] bg-[url("https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")]'>
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
