import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";
import { generateQuize} from "../middleware/generateQuize.js";
import axios from "axios";

export default function Quize(props){
    const { register, handleSubmit } = useForm();
    const course = useSelector((state) => state.course.name);
    const [loading, setLoading] = useState(false);
    const [quizData, setQuizData] = useState(null);

    const submitForm = async (data) => {
        console.log(data);
    };

    const createQuize = async () => {
        setLoading(true);
        try {
            // Simulate data fetching
            const response = await axios.post('http://localhost:3000/api/generate-quize', { name: props.level }, {withCredentials: true});
            setQuizData(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
            <div className="mt-4">
            {!quizData ?<button onClick={createQuize} disabled={loading}>
                {loading ? "Loading..." : "Take Quiz"}
            </button> : null}
            {!loading && quizData && ( <form className="flex flex-col" onSubmit={handleSubmit(submitForm)} noValidate>

                <div className="flex flex-row gap-2">
                    <p>Q 1.</p>
                    <p>{quizData.quize.que1.que}</p>
                </div>
                <div className=" flex flex-col" >
                <label htmlFor='que1'><input className="mr-2" type="radio" {...register ("que1")} name="que1" id="a" value="a" />{quizData.quize.que1.a}</label>
                    
                <label htmlFor='que1'><input className="mr-2" type="radio" {...register ("que1")} name="que1" id="b" value="b" />{quizData.quize.que1.b}</label>    
                    
                <label htmlFor='que1'><input className="mr-2" type="radio" {...register ("que1")} name="que1" id="c" value="c" />{quizData.quize.que1.c}</label>    
                    
                <label htmlFor='que1'><input className="mr-2" type="radio" {...register ("que1") } name="que1" id="d" value="d" />{quizData.quize.que1.d}</label>    
                </div>
                    <br/>

                    <div className="flex gap-2 flex-row">
                    <p>Q 2.</p>
                    <p>{quizData.quize.que2.que}</p>
                    </div>
                
                    <label htmlFor='que2'><input className="mr-2" type="radio" {...register ("que2")} name="que2" id="a" value="a" />{quizData.quize.que2.a}</label>
                    
                    <label htmlFor='que2'><input className="mr-2" type="radio" {...register ("que2")} name="que2" id="b" value="b" />{quizData.quize.que2.b}</label>
                    
                    <label htmlFor='que2'><input className="mr-2" type="radio" {...register ("que2")} name="que2" id="c" value="c" />{quizData.quize.que2.c}</label>
                    
                    <label htmlFor='que2'><input className="mr-2" type="radio" {...register ("que2") } name="que2" id="d" value="d" />{quizData.quize.que2.d}</label>
                        
                    <button className="w-20 h-9 bg-black text-white mt-5">Submit</button>
            </form>
            )}
            </div>
        </>
    )
}