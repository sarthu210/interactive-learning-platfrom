import React from "react";
import { Quize } from "../components";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function QuizePage(){
    const {register, handleSubmit} = useForm();
    const {quizeId} = useParams();

    return(
        <>
            <div className="flex justify-center mt-5">
                <Quize level={quizeId} />
            </div>
        </>
    )
}