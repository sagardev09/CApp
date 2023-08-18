import React from 'react'
import Image from 'next/image'
import setting from "@/public/setting.svg"
import logout from "@/public/logout.svg"
import profile from "@/public/profile.svg"
import cross from "@/public/cross.svg"

const ProfileModal = () => {
    return (
        <div className='bg-gray-400 bg-opacity-30 w-[220px] px-2 py-2 rounded-xl flex flex-col'>
            {/* <div className='p-1'>
                <Image src={cross} className='float-right' alt='' />
            </div> */}
            <div className='flex flex-col gap-1 py-2 '>
                <div className='flex items-center gap-4  rounded-lg py-3 px-3 cursor-pointer hover:bg-slate-300 bg-opacity-30'>
                    <Image src={profile} alt='' />
                    <h5>profile</h5>
                </div>
                <div className='flex items-center gap-4  rounded-lg py-3 px-3 cursor-pointer hover:bg-slate-300 bg-opacity-30'>
                    <Image src={setting} alt='' />
                    <h5>setting</h5>
                </div>
            </div>
            <div className='w-[220px] h-[0.6px] bg-black bg-opacity-20 my-2 ml-[-8px]'></div>
            <div className='flex items-center gap-4  rounded-lg py-3 px-3 cursor-pointer hover:bg-slate-300 bg-opacity-30'>
                <Image src={logout} alt='' />
                <h5>logout</h5>
            </div>
        </div>
    )
}

export default ProfileModal