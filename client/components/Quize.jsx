import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export default function Quize(props) {
    const { register, handleSubmit } = useForm();
    const [quizeAnswer, setQuizeAnswer] = useState("");
    const course = useSelector((state) => state.course.name);
    const [loading, setLoading] = useState(false);
    const [quizData, setQuizData] = useState(null);
    const [error, setError] = useState("");
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user has already completed the quiz
        const checkQuizStatus = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/check-quiz-status', { withCredentials: true });
                if (response.data.quize1) {
                    setSubmitted(true);
                    setSuccessMessage("You have already completed this quiz.");
                }
            } catch (error) {
                console.error(error);
            }
        };
        checkQuizStatus();
    }, []);

    const submitForm = async (data) => {
        setQuizeAnswer(data);
        await checkAnser(data);
        console.log(data);
    };

    const createQuize = async () => {
        setLoading(true);
        try {
            // Simulate data fetching
            const response = await axios.post('http://localhost:3000/api/generate-quize', { name: props.level }, { withCredentials: true });
            setQuizData(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const checkAnser = async (answer) => {
        if (answer.que1 === quizData.quize.que1.answer && answer.que2 === quizData.quize.que2.answer) {
            const response = await axios.post('http://localhost:3000/quize/quizSubmit', { name: props.level }, { withCredentials: true });
            console.log(response.data);
            setScore(2); // Assuming each question is worth 1 point
            setSuccessMessage("Quiz submitted successfully!");
            setSubmitted(true);
            setError("");
            toast.success("Quiz submitted successfully!", {
                icon: "✔️"
            });
        } else {
            setError("Wrong Answer. Please try again.");
            setScore(0);
        }
    };

    const memoizedQuizData = useMemo(() => quizData, [quizData]);

    return (
        <>
            <div className="mt-4 max-w-4xl mb-20 mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
                <ToastContainer />
                {successMessage && <div className="alert alert-success bg-green-100 text-green-700 p-4 rounded mb-4">{successMessage}</div>}
                {error && <div className="alert alert-danger bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>}
                <div className="score text-lg font-bold mb-4">Score: {score}</div>
                {!memoizedQuizData && !submitted ? (
                    <button className="w-48 h-10 bg-black text-white rounded mt-5 hover:bg-gray-900" onClick={createQuize} disabled={loading}>
                        {loading ? "Loading..." : "Take Quiz"}
                    </button>
                ) : null}
                {!loading && memoizedQuizData && !submitted && (
                    <form className="flex flex-col" onSubmit={handleSubmit(submitForm)} noValidate>
                        <div className="flex flex-row gap-2 mb-4">
                            <p className="font-bold">Q 1.</p>
                            <p>{memoizedQuizData.quize.que1.que}</p>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2"><input className="mr-2" type="radio" {...register("que1")} name="que1" id="a" value="a" />{memoizedQuizData.quize.que1.a}</label>
                            <label className="mb-2"><input className="mr-2" type="radio" {...register("que1")} name="que1" id="b" value="b" />{memoizedQuizData.quize.que1.b}</label>
                            <label className="mb-2"><input className="mr-2" type="radio" {...register("que1")} name="que1" id="c" value="c" />{memoizedQuizData.quize.que1.c}</label>
                            <label className="mb-2"><input className="mr-2" type="radio" {...register("que1")} name="que1" id="d" value="d" />{memoizedQuizData.quize.que1.d}</label>
                        </div>
                        <div className="flex flex-row gap-2 mb-4">
                            <p className="font-bold">Q 2.</p>
                            <p>{memoizedQuizData.quize.que2.que}</p>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2"><input className="mr-2" type="radio" {...register("que2")} name="que2" id="a" value="a" />{memoizedQuizData.quize.que2.a}</label>
                            <label className="mb-2"><input className="mr-2" type="radio" {...register("que2")} name="que2" id="b" value="b" />{memoizedQuizData.quize.que2.b}</label>
                            <label className="mb-2"><input className="mr-2" type="radio" {...register("que2")} name="que2" id="c" value="c" />{memoizedQuizData.quize.que2.c}</label>
                            <label className="mb-2"><input className="mr-2" type="radio" {...register("que2")} name="que2" id="d" value="d" />{memoizedQuizData.quize.que2.d}</label>
                        </div>
                        <button className="w-full h-10 bg-black text-white rounded mt-5 hover:bg-gray-900">Submit</button>
                    </form>
                )}
                {submitted && <a href='/courses/java'><button className="w-full h-10 bg-black text-white rounded mt-5 hover:bg-gray-900">Back</button></a>}
            </div>
        </>
    );
}