import Stepper from '@/app/components/Stepper'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#6a7582]  rounded-xl w-[100%] h-[92vh] flex py-[25px] justify-center '>
        
          {/* left side */}
          <div className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex justify-center overflow-hidden rounded-l-xl '>
            <div className='flex justify-end items-center w-full'>
              <img className='w-[650px] h-full ' src={"/signupbg.jfif"} alt="" />
            </div>
          </div>

          {/* main login card */}
          <div className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.5)_0px_3px_7px_-3px] w-[30%] bg-white px-5 py-10 rounded-r-xl'>
            <Stepper />
          </div>
        </div>
  )
}

export default page
