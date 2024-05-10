import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";


const TopNavbar = () => {
  return (
    <div className='w-full text-white bg-[#618264]'>
        <div className='flex items-center justify-between w-full max-w-[1200px] mx-auto p-[8px]'>
            <div className='flex items-center gap-2 text-[16px] font-light'><FaPhoneAlt /> <a href='' className='hover:underline tracking-wide'>01915100176</a></div>
           
        </div>
    </div>
  )
}

export default TopNavbar