"use client"
import React, { useState } from 'react'
import { Button } from "@nextui-org/react";
import Link from 'next/link';


const page = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <section className='flex px-10 w-[100%] h-[92vh] shadow-md bg-[#F6F6F6]'>
                <div className='flex px-5 gap-5  py-5 w-[100%]  h-[100%] '>
                    <div className='flex flex-col px-4 mt-36'>
                        <p className='text-[45px] text-black font-bold tracking-wider leading-none'>Sign In to <br /> Resume your Journey</p>
                        <p className='text-[16px] font-semibold tracking-wider mt-10 w-[390px] leading-none'>We're delighted to have you return to your learning journey with your course. Log in to continue your exploration of fascinating subjects, gain new skills.</p>
                        <p className='mt-10 text-[14px] text-gray-600' >If you haven't joined us, <Link className='text-black font-semibold underline ' href={"/signup/student"} >Register here</Link></p>
                    </div>
                    <div className='mt-52 '>
                        <img className='w-[450px] h-[400px] bg-purple-500 ' src={"/loginimg.png"} alt="" />
                    </div>
                </div>
                {/* login details  */}
                <div className='px-10 py-4 w-[70%] flex flex-col items-center justify-center '>
                    <div className='flex flex-col w-[370px] px-4 py-8  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.5)_0px_3px_7px_-3px]'>
                        <div class="relative ">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 ">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </div>
                            <input type="text" className="focus:outline-none  text-gray-400 text-sm rounded-lg block w-full pl-10  py-3 border border-gray-200 placeholder-gray-400 " placeholder="name@gmail.com" />
                        </div>

                        <div className="relative mt-5">
                           
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                className="w-full pl-10 py-2 border rounded-md focus:outline-none"
                                placeholder="Password" />
                            <button className="absolute top-3 right-4 transform  text-gray-600"
                                onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <svg
                                        aria-hidden="true"
                                        fill="none"
                                        focusable="false"
                                        height="1em"
                                        role="presentation"
                                        viewBox="0 0 24 24"
                                        width="1em"
                                    >
                                        <path
                                            d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        aria-hidden="true"
                                        fill="none"
                                        focusable="false"
                                        height="1em"
                                        role="presentation"
                                        viewBox="0 0 24 24"
                                        width="1em"
                                    >
                                        <path
                                            d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div className='flex justify-end mt-2'>
                            <a href="/">
                                <p className=' text-zinc-500 text-sm hover:underline'>Forgot Password?</p>
                            </a>
                        </div>
                        <div className='flex items-center mt-5 w-[100%]'>
                            <Button className="w-[100%]" color="primary" variant="shadow">
                                Log In
                            </Button>
                        </div>

                        <div className='flex  items-center mt-5'>
                            <hr className='w-[50%]' /> <p className='mx-3 text-sm text-gray-600'>Or</p> <hr className='w-[50%]' />
                        </div>


                        <div className='flex justify-center gap-4 py-3 mt-5 '>
                            <a className=' px-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-300' href="/">
                                <svg className='w-[25px] py-1' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4" />
                                    <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853" />
                                    <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05" />
                                    <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335" />
                                </svg>
                            </a>

                            <a className=' px-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-300 py-1' href="/">
                                <svg fill="#000000" className='w-[25px]' viewBox="-3.5 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-apple"><path d='M13.623 10.627c-.025-2.533 2.066-3.748 2.159-3.808-1.175-1.72-3.005-1.955-3.657-1.982-1.557-.158-3.039.917-3.83.917-.788 0-2.008-.894-3.3-.87C3.299 4.909 1.734 5.87.86 7.39c-1.764 3.06-.452 7.595 1.267 10.077.84 1.215 1.842 2.58 3.157 2.53 1.266-.05 1.745-.819 3.276-.819 1.531 0 1.962.82 3.302.795 1.363-.026 2.226-1.239 3.06-2.457.965-1.41 1.362-2.775 1.386-2.845-.03-.013-2.658-1.02-2.684-4.045zm-2.518-7.433c.698-.847 1.169-2.022 1.04-3.194C11.14.04 9.921.67 9.2 1.515c-.647.75-1.214 1.945-1.062 3.094 1.122.088 2.268-.57 2.967-1.415z' /></svg>
                            </a>

                            <a className=' px-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-300 py-1' href="/">
                                <svg fill="#000000" className='w-[25px]  ' viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-github"><path d='M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z' /></svg> </a>
                        </div>
                    </div>



                </div>

            </section>
        </>
    )
}

export default page
