import React from 'react'
import { FaChevronCircleRight, FaTachometerAlt, FaChevronRight, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendar, FaChevronLeft, FaBolt } from 'react-icons/fa'
import { FaRegSun } from 'react-icons/fa'

const Sidebar = () => {
    return (
        // craet a side bar and it show h-screen
        <div className='bg-[#4E73DF] h-screen px-[25px]'>
            <div className='flex py-[20px] px-[25px] items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='flex py-[20px] px-[25px] text-white text-[20px] leading-[20px] font-bold cursor-pointer   border-[#EDEDED]/[0.3]'>AdminPanel</h1>
            </div>

            <div className='flex gap-[15px] items-center py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <FaTachometerAlt color='white' />
                <p className='text-[14px] leading-[20px] font-bold text-white'>DashBoard</p>
            </div>

            <div className='pt-[15px] border-b-[1px]  border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun color='white' />
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Pages</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegChartBar color='white' />
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Charts</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center gap-[10px]'>
                    <FaRegCalendar color='white' />
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                </div>
            </div>

            <div className='pt-[15px] border-b-[1px]  border-[#EDEDED]/[0.3]  '>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>ADDONCE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white' />
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Components</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegChartBar color='white' />
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Utilies</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center gap-[10px] py-[15px]'>
                    <FaRegCalendar color='white' />
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                </div>
            </div>

            {/* white circle */}

            <div className='flex items-center justify-center pt-[15px]'>
                <div className='h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer'>
                    <FaChevronLeft color='white' />
                </div>
            </div>

            <div className='bg-[#395CBF] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
                <FaBolt color='white' />
                <p className='text-[12px] leading-[18px] font-normal text-white/[0.4] text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                </p>
            <button className='bg-[#17A673] text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal' >Upgrate to Pro !</button>
            </div>
        </div>
    )
}

export default Sidebar;