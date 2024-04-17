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
    <div>
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
            <input
                type="email"
                placeholder="Your email"
                {...register("username",{
                    required:{
                        value:true,
                        message:"Please enter your email"
                    }
                })}
                
                className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <input
                type="password"
                placeholder="Your Password"
                {...register("password", {
                    required: {
                        value: true,
                        message: "Please enter your password"
                    }
                
                })}
                required
                className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <p>*{}</p>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Login
            </button>
        </form>
        <p className="text-red-500">{error}</p>
    </div>
)
}
