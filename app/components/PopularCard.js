import React from 'react'
import AllCoursesCard from './AllCoursesCard'

const PopularCard = () => {
    return (
        <div className='flex flex-col gap-4 overflow-y-scroll h-[420px] mt-2'>
            <AllCoursesCard />
        </div>
    )
}

export default PopularCard