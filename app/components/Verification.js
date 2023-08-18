import React from 'react'

const Verification = ({userName, setUsername}) => {
    return (
        <>
            <div>
                <label className="block mb-1 text-[12px] tracking-wider font-medium text-zinc-500">Phone</label>
                <input  type="tel" class=" focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required />
            </div>
        </>
    )
}

export default Verification
