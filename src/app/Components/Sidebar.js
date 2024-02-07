import React from 'react'
import {FaTachometerAlt} from 'react-icons/fa'
import {FaRegSun} from 'react-icons/fa'

 const Sidebar = () => {
  return (
    // craet a side bar and it show h-screen
    <div className='bg-[#4E73DF] h-screen px-[25px]'>
        <div className='flex py-[20px] px-[25px] items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
        <h1 className='flex py-[20px] px-[25px] text-white text-[20px] leading-[20px] font-bold cursor-pointer   border-[#EDEDED]/[0.3]'>AdminPanel</h1>
        </div>

        <div className='flex gap-[15px] items-center py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <FaTachometerAlt color='white'/>
            <p className='text-[14px] leading-[20px] font-bold text-white'>DashBoard</p>
        </div>

        <div>
            <p>INTERFACE</p>
            <div>
                    <div>
                        <FaRegSun/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;