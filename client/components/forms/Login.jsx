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
    <div className='flex justify-evenly'>
        <div className='w-1/2 m-10'>
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
            <p className='text-black'>If not register? <a href='/login' className='text-red-600'>login here</a></p>
        </form>
    </div>
    <div className='w-full h-[600px] bg-[url("https://img.freepik.com/free-vector/education-pattern-background-doodle-style_53876-115365.jpg?t=st=1713775837~exp=1713779437~hmac=72bf3dcb763a239dd8fca895f4885fb896cc0feb92179b1a4d67af3e152cf523&w=740")]'>
    </div>
    </div>
    
)
}
