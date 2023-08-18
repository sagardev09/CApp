"use client"
import { useState } from 'react';
import Image from 'next/image'
import { Badge, CircularProgress } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react"
import { Button } from "@nextui-org/react";
import arr from "@/public/rightarr.svg"
import flag from "@/public/spanish.svg"
import AllCourses from './components/AllCourses';
import NewestCourses from './components/NewestCourses';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import search from "@/public/search.svg"
import notification from "@/public/notification.svg"
import NotificationModal from './components/NotificationModal';
import ProfileModal from './components/ProfileModal';
import { WeeklyChart } from './components/WeeklyChart';
import { MonthlyChart } from './components/MonthlyChart';
import brain from "@/public/brain.svg"
import avtar from "@/public/Saly-1-min.png"
import { Theme } from '@/context/Context';


export default function Home() {

  const [allcourses, setallcourses] = useState(true)
  const [newest, setnewest] = useState(false)
  const [toprated, settoprated] = useState(false)
  const [popular, setpopular] = useState(false)
  const [issearchvisible, setissearchvisible] = useState(false)
  const [isnotification, setisnotification] = useState(false)
  const [isprofile, setisprofile] = useState(false)
  const [selectoption, setselectoption] = useState("weekly")
  const { dark } = Theme()


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

  const handleSearch = () => {
    setissearchvisible(true)
  }
  const handleProfile = () => {
    setisprofile(!isprofile)
  }
  const handlenotification = () => {
    setisnotification(!isnotification)
  }

  const handleoptionchange = (e) => {
    setselectoption(e.target.value)
  }

  return (
    <main className={`min-h-full w-[100%] p-4 flex justify-between overflow-hidden rounded-xl ${dark ? "bg-[#272829]" : "bg-[#5A96E3]"}`}>
      <div className='flex-1 flex flex-col gap-8 '>
        <div className={`w-full  ${dark ? "bg-[#1b1b1b] bg-opacity-70" : "bg-blue-600 bg-opacity-40"} rounded-lg p-6 h-[250px] flex flex-col justify-center relative user-shadow`}>
          <h3 className={`text-6xl font-black tracking-wider ${dark ? "text-[#fff]" : "text-[#141414]"}`}>Hello User</h3>
          <h5 className={`text-xl font-medium my-2 ${dark ? "text-[#fff]" : "text-[#141414]"}`}>It’s good to see you again.</h5>
          <Image src={avtar} alt='' className='h-[350px] w-[350px] absolute right-5 top-[-50px]' />
        </div>
        <div className='flex w-full gap-4 items-center '>
          <div className={`flex w-full justify-between items-center ${dark ? "bg-[#1b1b1b] bg-opacity-70" : "bg-blue-600 bg-opacity-40"} h-[90px] rounded-lg px-6 user-shadow`}>
            <div>
              <Image src={flag} className='h-[50px] w-[50px]' alt='' />
            </div>
            <div>
              <h5 className={`text-lg font-bold ${dark ? "text-[#fff]" : "text-[#141414]"}`}>Spanish B2</h5>
              <p className={`text-sm font-normal ${dark ? "text-[#fff]" : "text-[#141414]"}`}>by Alejandro Velazquez</p>
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
              <Button size='lg' color={`${dark ? "danger" : "primary"}`} aria-label="Continue">Continue</Button>
            </div>
          </div>
          <div>
            <div className='flex gap-2 justify-center items-center'>
              <Image src={arr} className='h-[40px] w-[80px] transform  cursor-pointer' alt='' />
              <Image src={arr} className='h-[40px] w-[80px] cursor-pointer' alt='' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className={`text-2xl font-bold tracking-wider my-1 ${dark ? "text-[#fff]" : "text-[#141414]"}`}>Courses</h2>
          <div className='flex justify-start items-center gap-6 '>
            <div className='cursor-pointer' onClick={handleall}>
              <h5 className={allcourses ? `text-lg font-bold tracking-wider  ${dark ? "text-[#fff]" : "text-[black]"}  border-b-3 border-blue-600 rounded-md` : `text-lg font-normal tracking-wider  ${dark ? "text-[#ffffff] text-opacity-70" : "text-gray-600"}`}>All Courses</h5>
            </div>
            <div className='cursor-pointer' onClick={handlenew}>
              <h5 className={newest ? `text-lg font-bold tracking-wider ${dark ? "text-[#fff]" : "text-[black]"} border-b-3 border-blue-600 rounded-md` : `text-lg font-normal tracking-wider ${dark ? "text-[#ffffff] text-opacity-70" : "text-gray-600"}`}>The Newest</h5>
            </div>
            <div className='cursor-pointer' onClick={handletop}>
              <h5 className={toprated ? `text-lg font-bold tracking-wider ${dark ? "text-[#fff]" : "text-[black]"} border-b-3 border-blue-600 rounded-md` : `text-lg font-normal tracking-wider ${dark ? "text-[#ffffff] text-opacity-70" : "text-gray-600"} `}>Top Rated</h5>
            </div>
            <div className='cursor-pointer' onClick={handlepopular}>
              <h5 className={popular ? `text-lg font-bold tracking-wider ${dark ? "text-[#fff]" : "text-[black]"} border-b-3 border-blue-600 rounded-md` : `text-lg font-normal tracking-wider ${dark ? "text-[#ffffff] text-opacity-70" : "text-gray-600"} `}>Most Popular</h5>
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
      <div className='flex-1  pl-8'>
        <div className='flex justify-between gap-8 items-center'>
          <div className='w-full relative flex '>
            <input type="text" className={issearchvisible ? "w-full py-3 px-6 rounded-xl bg-gray-400 bg-opacity-30 transition-width duration-500 ease-in-out" : 'w-[0] py-3 pr-[0] pl-[0] rounded-xl bg-gray-400  bg-opacity-30  '} />
            <Image src={search} alt='' className='absolute right-3 top-3 cursor-pointer' onClick={handleSearch} />
          </div>
          <div className='cursor-pointer relative' onClick={handlenotification} onBlur={() => setisnotification(false)}>
            <Badge color="danger" content={5} shape="circle">
              <Image src={notification} alt='' />
            </Badge>
            <div className='absolute bottom-[-40px] right-2'>
              {
                isnotification ? <NotificationModal /> : ""
              }
            </div>
          </div>
          <div onClick={handleProfile} className='relative' onBlur={() => setisprofile(false)}>
            <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className='cursor-pointer' />
            <div className='absolute bottom-[-210px] right-1'>
              {
                isprofile ? <ProfileModal /> : ""
              }
            </div>
          </div>
        </div>
        <div className='flex gap-8 justify-between items-center py-6'>
          <div className={`flex-1  ${dark ? "bg-[#1b1b1b] bg-opacity-70" : "bg-blue-600 bg-opacity-40"} w-full rounded-xl p-8 h-[150px] flex justify-center items-center gap-6 user-shadow`}>
            <h1 className={`text-8xl font-black ${dark ? "text-[#fff]" : "text-[#141414]"}`}>11</h1>
            <h3 className={`text-2xl font-semibold w-[150px] tracking-widest ${dark ? "text-[#fff]" : "text-[#141414]"}`}>courses completed</h3>
          </div>
          <div className={`flex-1  ${dark ? "bg-[#1b1b1b] bg-opacity-70" : "bg-blue-600 bg-opacity-40"} w-full rounded-xl p-8 h-[150px] flex justify-center items-center gap-6 user-shadow`}>
            <h1 className={`text-8xl font-black ${dark ? "text-[#fff]" : "text-[#141414]"}`}>4</h1>
            <h3 className={`text-2xl font-semibold w-[150px] tracking-widest ${dark ? "text-[#fff]" : "text-[#141414]"}`}>course in progress</h3>
          </div>
        </div>
        <div>
          <div>
            <h3 className={`text-3xl font-extrabold ${dark ? "text-[#fff]" : "text-[#141414]"}`}>Your statistics</h3>
            <div className='flex justify-between items-center p-2'>
              <h5 className={`text-xl font-extrabold ${dark ? "text-[#fff]" : "text-[#141414]"}`}>Learning Hours</h5>
              <select value={selectoption} onChange={handleoptionchange} className={`select-arrow px-4 py-2  rounded outline-none appearance-none text-sm ${dark ? " bg-rose-600 bg-opacity-90" : " bg-blue-600 bg-opacity-60"} bg-blue-600 bg-opacity-30 font-bold ${dark ? "text-[#fff]" : "text-[#141414]"}`}>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
          <div className=''>
            {
              selectoption === "weekly" && <WeeklyChart />
            }
            {
              selectoption !== "weekly" && <MonthlyChart />
            }
          </div>
        </div>
        <div className={`flex gap-8 w-full ${dark ? "bg-[#1b1b1b] bg-opacity-70" : "bg-blue-600 bg-opacity-40"} my-8 p-[21px] rounded-xl justify-evenly user-shadow`}>
          <div className='flex flex-col gap-[13px]'>
            <h1 className={`text-4xl font-black ${dark ? "text-[#fff]" : "text-[#141414]"}`}>Learn even more!</h1>
            <h5 className={`text-base font-medium w-[220px] ${dark ? "text-[#fff]" : "text-[#141414]"}`}>Unlock premium features
              only for $9.99 per month.</h5>
            <Button size='lg' color={`${dark ? "danger" : "primary"}`} aria-label='button'>Go Premium</Button>
          </div>
          <div>
            <Image src={brain} alt='' />
          </div>
        </div>
      </div>
    </main>
  )
}
