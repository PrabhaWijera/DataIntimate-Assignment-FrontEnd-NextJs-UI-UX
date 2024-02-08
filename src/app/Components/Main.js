import React from 'react'
import { FaComment, FaDollarSign, FaEllipsisV, FaPhone, FaRegCalendarMinus, FaSnapchat, FaTasks } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PieComponents from './PieComponents';
import { Progress } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Footerx from './Footerx';

// import error from '@/app/assets/';



const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];







const Main = () => {


  return (
    <div className='pt-[25px] px-[25px] bg-[#EDEDED]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Main</h1>
        <p className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generated Reports</p>
      </div>
      <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color='grey' />
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1cc88a] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
          <div>
            <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>EARNINGS (ANNUAL)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$215,000</h1>
          </div>
          <FaDollarSign fontSize={28} color='grey' />
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#36b9cc] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
          <div>
            <h2 className='text-[#36b9cc] text-[11px] leading-[17px] font-bold'>TASKS</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>50%</h1>
          </div>
          <FaTasks fontSize={28} color='grey' />
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#f6c23e] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-in-out'>
          <div>
            <h2 className='text-[#f6c23e] text-[11px] leading-[17px] font-bold'>PENDING REQUESTS</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>18</h1>
          </div>
          <FaComment fontSize={28} color='grey' />
        </div>
      </div>

      {/* line chart */}
      <div className='flex mt-[22px] w-full gap-[30px]'>
        <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[EDEDED] mb-[20px]'>
            <h2>Earning Overview</h2>
            <FaEllipsisV fontSize={20} color='#5a5c69' />
          </div>
          <div>
            {/* <LineChart
            width={1150}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart> */}
          </div>


        </div>

        <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8FF9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
            <h2>Revenue Resources</h2>
            <FaEllipsisV color='#5a5c69' className='cursor-pointer' />
          </div>
          <div className='pl-[35px]'>
            <PieComponents />
          </div>
        </div>
      </div>


      <div className='flex mt-[22px] w-full gap-[30px]'>
        <div className='basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
            <h2 className='text-[#5a5c69] text-[20px] leading-[24px] font-bold'>Projects</h2>
            <FaEllipsisV className='text-[#5a5c69] text-[11px] leading-[17px] font-bold' />
          </div>
          <div className='px-[25px] space-y-[15px] py-[15px]'>

            <div>
              <h2>Server Migration</h2>
              <Progress percent={20} strokeColor="#e74a3b" />
            </div>

            <div>
              <h2>Sales Tracking</h2>
              <Progress percent={40} strokeColor="#f6c23e" />
            </div>

            <div>
              <h2>Customer Database</h2>
              <Progress percent={60} strokeColor="#4e73df" />
            </div>

            <div>
              <h2>Payout Details</h2>
              <Progress percent={80} strokeColor="#36b9cc" />
            </div>

            <div>
              <h2>Account Setup</h2>
              <Progress percent={100} strokeColor="#1cc88a" />
            </div>
          </div>
        </div>

        <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px] gap-[30px]' style={{ margin: '0 15px' }}>
          <div className='bg-[#F8F9FC] flex items-center justify-normal py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
            <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Illustrations</h2>
          </div>
          <div className='pl-[35px] flex items-center justify-center h-[130%]'>
            <div>
              {/* <img src={error} alt="" className='transform scale-[135%]' /> */}
              <p className='mt-[15px] text-semibold text-gray-500 gap-3'>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
              <p>
                <a href='https://undraw.co/' className='text-[#4e73df]'>Browse Illustrations on unDraw →</a>
              </p>
            </div>
          </div>
        </div>




      </div>

      <div class="flex justify-between  "> 

        <div class="basis-[45%]  cursor-pointer  ">
          <div class=" flex items-center justify-center py-[15px] px-[20px]">
          </div>
          <div class="pl-[35px] grid grid-cols-2 gap-[50px] h-[100%]">
            <div class="bg-[#4e73df] h-[82px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">Primary
              <p>#4e73df</p>
            </div>
            <div class="bg-[#1cc88a] h-[82px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">Success
              #1cc88a</div>
            <div class="bg-[#36b9cc] h-[82px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">Info
              #36b9cc</div>
            <div class="bg-[#f6c23e] h-[82px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">Warning
              #f6c23e</div>
            <div class="bg-[#e74a3b] h-[82px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">Danger
              #e74a3b</div>
            <div class="bg-[#858796] h-[82px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">Secondary
              #858796</div>
            <div class="bg-[#f8f9fc] h-[82px] rounded-[3px] text-black flex items-center justify-center px-[30px] cursor-pointer">Light
              #f8f9fc</div>
            <div class="bg-[#5a5c69] h-[82px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">Dark
              #5a5c69</div>

          </div>
        </div>


        <div class="basis-[45%] border border-t-[30px] bg-white shadow-md cursor-pointer rounded-[4px]">
          <div class="bg-[#F8F9FC] flex items-center justify-normal py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 class="text-[#4e73df] text-[16px] leading-[19px] font-bold">Development Approach</h2>

          </div>
          <div class="pl-[35px] flex items-center justify-center h-[100%] ">
            <div>
              {/* <!-- <img src={error} alt="" class='transform scale-[135%]' />  */}
              <p class='mt-[196px] text-semibold text-gray-500'>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
                Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
            </div>
          </div>
        </div>

      </div>
<div className='w-[450px]  h-[50px] border'>

</div>
    </div>

  )
}

export default Main;