import React from 'react'
import Link from 'next/link'

const page = () => {

    return (
        <>
            <section className='bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg w-[100%] h-[92vh] flex flex-col justify-center items-center '>
                <div className='flex justify-center items-center'>
                    <h1 className='text-white text-[90px]'>Welcome to Site</h1>
                </div>
                <div className='flex gap-64 mt-32 '>
                    <div className='flex flex-col items-center  '>
                        <Link href={"/login/student"}>
                            <img className='w-[100px] h-[100px] rounded-full ' src={"/profile.jpg"} alt="" />
                            <button className='text-white bg-red-500 text-[20px] rounded-lg px-16 py-3'>Log In as Student</button>
                        </Link>

                    </div>
                    <div className='flex flex-col items-center '>
                        <Link href={"/login/teacher"}>
                            <img className='w-[100px] h-[100px] rounded-full ' src={"/profile.jpg"} alt="" />
                            <button className='text-white bg-red-500 text-[20px] rounded-lg px-16 py-3'>Log In as Teacher</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
