"use client"
import { useState } from 'react';
import Image from 'next/image'
import { CircularProgress } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import arr from "@/public/rightarr.svg"
import flag from "@/public/spanish.svg"
import AllCourses from './components/AllCourses';
import NewestCourses from './components/NewestCourses';
import TopRated from './components/TopRated';
import Popular from './components/Popular';


export default function Home() {

  const [allcourses, setallcourses] = useState(true)
  const [newest, setnewest] = useState(false)
  const [toprated, settoprated] = useState(false)
  const [popular, setpopular] = useState(false)

  const handleall = () => {
    setallcourses(true)
    setnewest(false)
    settoprated(false)
    setpopular(false)
  }
  const handlenew = () => {
    setnewest(true)
    setallcourses(false)
    settoprated(false)
    setpopular(false)
  }
  const handletop = () => {
    setnewest(false)
    setallcourses(false)
    settoprated(true)
    setpopular(false)
  }

  const handlepopular = () => {
    setnewest(false)
    setallcourses(false)
    settoprated(false)
    setpopular(true)
  }

  return (
    <main className='min-h-full w-[100%] p-4 flex justify-between'>
      <div className='flex-1 flex flex-col gap-8'>
        <div className='w-full bg-black bg-opacity-20 rounded-lg p-6 h-[250px] flex flex-col justify-center'>
          <h3 className='text-4xl font-normal '>Hello User</h3>
          <h5 className='text-base font-normal'>It’s good to see you again.</h5>
        </div>
        <div className='flex w-full gap-4 items-center'>
          <div className='flex w-full justify-between items-center bg-black bg-opacity-20 h-[90px] rounded-lg px-6'>
            <div>
              <Image src={flag} className='h-[50px] w-[50px]' />
            </div>
            <div>
              <h5 className='text-lg font-bold'>Spanish B2</h5>
              <p className='text-sm font-normal'>by Alejandro Velazquez</p>
            </div>
            <div>
              <CircularProgress
                size="lg"
                value={80}
                color="success"
                showValueLabel={true}
                classNames={{
                  value: "text-xs font-medium text-black",
                }}
              />
            </div>
            <div>
              <Button size='lg' color='primary'>Continue</Button>
            </div>
          </div>
          <div>
            <div className='flex gap-2 justify-center items-center'>
              <Image src={arr} className='h-[40px] w-[80px] transform  cursor-pointer' alt='' />
              <Image src={arr} className='h-[40px] w-[80px] cursor-pointer' alt='' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold tracking-wider my-1'>Courses</h2>
          <div className='flex justify-start items-center gap-6 '>
            <div className='cursor-pointer' onClick={handleall}>
              <h5>All Courses</h5>
            </div>
            <div className='cursor-pointer' onClick={handlenew}>
              <h5>The Newest</h5>
            </div>
            <div className='cursor-pointer' onClick={handletop}>
              <h5>Top Rated</h5>
            </div>
            <div className='cursor-pointer' onClick={handlepopular}>
              <h5>Most Popular</h5>
            </div>
          </div>
          <div>
            {
              allcourses ? <AllCourses /> : ""
            }
            {
              newest ? <NewestCourses /> : ""
            }
            {
              toprated ? <TopRated /> : ""
            }
            {
              popular ? <Popular /> : ""
            }
          </div>
        </div>
      </div>
      <div className='flex-1'></div>
    </main>
  )
}
