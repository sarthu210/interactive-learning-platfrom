import React from 'react'
import { CodingSpace, TherorySpace, CodeOutput } from '../components/index'

export default function LevelPage() {

  const data = { 
    title: "Level 1",
    subtitle: "Introduction to Java",
    theroryp1: "Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.",
    theroryp2: "The Java syntax is similar to C++, but is strictly an object-oriented programming language. For example, most of the code is written within classes, and each class can have fields and methods.",
    theroryp3: "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible."
  }

  const code = {
    output: "Hello World",
    statusCode: 200,
  memory: '24192',
  cpuTime: '0.03'
  }

  return (
    <>
        <div className='flex flex-wrap max-[750px]:flex max-[750px]:flex-col mt-5 max-[750px]:mb-10'>
            <div className='w-[30%] max-[750px]:w-[100%] border-r-8'>
                <TherorySpace title={data.title} subtitle={data.subtitle}  theroyp1={data.theroryp1} theroyp2={data.theroryp2} theroyp3={data.theroryp3} />
            </div> 
            <div className='w-[40%] max-[750px]:w-[100%] border-r-8 overflow-hidden'>
                <CodingSpace />
            </div>
            <div className='w-[30%] max-[750px]:w-[100%]'>
                <CodeOutput output={code.output} satuscode={code.statusCode} memory={code.memory} cpuTime={code.cpuTime} />
            </div>
        </div>
    </>
  )
}
