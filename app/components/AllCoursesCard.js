"use client"
import React from 'react'
import Image from 'next/image'
import Coursedata from '@/data/AllCourses'
import clock from "@/public/clock.svg"
import fire from "@/public/fire.svg"
import { Button } from '@nextui-org/button'
import { Theme } from '@/context/Context'

const AllCoursesCard = () => {

    const data = Coursedata
    const { dark } = Theme()

    return (
        <>
            {
                data.map((item, index) => (
                    <div key={item.id} className={`${dark ? "bg-[#1b1b1b] bg-opacity-70" : "bg-blue-600 bg-opacity-40"} w-full flex gap-4 p-4 items-center justify-between  rounded-xl user-shadow`}>
                        <div className={`${dark ? "bg-[#1c1c1c]" : "bg-blue-800 bg-opacity-50"} flex justify-center items-center p-4 h-[60px] w-[60px] rounded-xl `}>
                            <Image className='object-contain' src={item.img} alt='' />
                        </div>
                        <div className='flex flex-col gap-1 w-[240px]'>
                            <h2 className={`text-xl font-bold tracking-wider ${dark ? "text-[#fff]" : "text-[#141414]"}`}>{item.heading}</h2>
                            <h5 className={`text-sm  font-medium ${dark ? "text-[#fff]" : "text-[#141414]"}`}>{item.title}</h5>
                        </div>
                        <div className='flex gap-2 items-center justify-center'>
                            <svg width="22" height="22" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.04395 0.634033C3.63257 0.634033 0.0439453 4.22266 0.0439453 8.63403C0.0439453 13.0454 3.63257 16.634 8.04395 16.634C12.4553 16.634 16.0439 13.0454 16.0439 8.63403C16.0439 4.22266 12.4553 0.634033 8.04395 0.634033ZM11.8486 12.772C11.7186 12.902 11.548 12.9674 11.3773 12.9674C11.2067 12.9674 11.0359 12.902 10.906 12.772L7.57263 9.43872C7.44727 9.31409 7.37732 9.14465 7.37732 8.96741V4.63403C7.37732 4.26538 7.6759 3.96741 8.04395 3.96741C8.41199 3.96741 8.71057 4.26538 8.71057 4.63403V8.69141L11.8486 11.8293C12.1093 12.0901 12.1093 12.5114 11.8486 12.772Z" fill={`${dark ? "#fff" : "#141414"}`} />
                            </svg>
                            <h5 className={`text-base font-medium ${dark ? "text-[#fff]" : "text-[#141414]"}`}>{item.duration}</h5>
                        </div>
                        <div className='flex gap-2 items-center justify-center'>
                            <svg width="22" height="22" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_276)">
                                    <path d="M12.3211 8.42653C12.2493 9.46863 11.6551 10.2002 10.969 10.5103C10.2416 10.8389 9.50627 10.6577 9.13916 10.059C8.5381 9.07885 8.95111 8.39666 9.3505 7.73691C9.80335 6.98881 10.3167 6.14088 9.82434 4.49194C9.43567 3.19016 8.67449 2.09725 7.56189 1.24356C7.21505 0.977471 6.88611 0.777346 6.61916 0.634033C6.99201 1.5416 7.47686 3.23044 6.9704 5.09631C6.64918 6.27985 5.80023 7.17672 4.97922 8.04406C3.89789 9.1865 2.77968 10.3678 2.77968 12.2553C2.77968 13.7195 3.28983 14.886 4.29591 15.7222C5.05778 16.3555 5.8352 16.6021 5.84295 16.604H7.69803L7.6592 16.6033C7.65205 16.5977 6.94531 16.0398 6.93314 15.4001C6.92747 15.101 7.08439 14.8142 7.39956 14.5475C7.87295 14.1469 8.13314 13.7156 8.19503 13.2289C8.23289 12.9313 8.19462 12.6167 8.0783 12.277C8.86348 12.6063 9.67567 13.3253 9.9509 14.2178C10.1981 15.0194 9.96943 15.8437 9.2903 16.604H11.3205C12.6504 15.5622 13.399 14.3136 13.5458 12.8931C13.7329 11.0819 12.9048 9.37603 12.3211 8.42653Z" fill={`${dark ? "#fff" : "#141414"}`} />
                                    <path d="M7.69805 16.604L9.26357 16.634C9.27265 16.6241 9.28135 16.614 9.29029 16.604H7.69805Z" fill={`${dark ? "#fff" : "#141414"}`} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_276">
                                        <rect width="15.2" height="16" fill="white" transform="translate(0.576172 0.634033)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h5 className={`text-base font-medium ${dark ? "text-[#fff]" : "text-[#141414]"}`}>{item.rating}</h5>
                        </div>
                        <div>
                            <Button size='lg' color={`${dark ? "danger" : "primary"}`} aria-label="Search">View course</Button>
                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default AllCoursesCard