import React from 'react'



function HomePage() {
  return (
    <div>
        <div className="container mt-10 mx-auto px-6 py-16 pt-28 text-center">
            <div className="mx-auto max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800  md:text-[45px]">Wellcome To EduHub!</h1>

            <p className="mt-6 text-gray-500 ">Best Self Learning Platofrom For Biginer</p>
            </div>
            <div className="mt-5">
                <a href='/courses'><button className='h-10 w-40 bg-gray-800 text-white hover:bg-white hover:border-[2px] hover:border-black hover:text-black' >Goto Courses</button></a>
            </div>
          </div>
    </div>
  )
}

export default HomePage