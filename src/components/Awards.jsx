import React from 'react'
import {BsTrophyFill} from 'react-icons/bs'
import {AiTwotoneHeart} from 'react-icons/ai'
import {BsLightbulbFill} from 'react-icons/bs'
import {BsBagFill} from 'react-icons/bs'
function Awards() {
  return (
    <div className='w-screen my-24 py-5 flex flex-col bg-[#122947] text-[#fff] items-center justify-center space-y-5'>
        <p className='text-[30px] font-bold'>Our Services</p>
        <p className='text-[15px] font-medium text-center'>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</p>
      <div className='grid md:gap-4 gap-3 lg:gap-16 py-7 lg:grid-cols-4 md:grid-cols-3
       grid-cols-2 items-center justify-center'>
      <div className=' flex items-center flex-col space-y-1'>
            <div className='bg-[#ffffff1A] flex items-center justify-center h-24 w-24 rounded-tr-[40px] rounded-bl-[40px]'>
            <BsTrophyFill className='h-9 w-9'/>
            </div>
            <h1 className='text-[35px] font-bold'>30 M</h1>
            <span className='text-[16px] sm:text-[19px]'>Blue Burmin Award</span>
        </div>
        <div className='flex items-center justify-center flex-col space-y-1'>
            <div className='bg-[#ffffff1A] flex items-center justify-center h-24 w-24 rounded-tr-[40px] rounded-bl-[40px]'>
            <BsBagFill className='h-9 w-9'/>
            </div>
            <h1 className='text-[35px] font-bold'>43 M</h1>
            <span className='text-[16px] sm:text-[19px]'>Mimo X11 Award</span>
        </div>
        <div className='flex items-center justify-center flex-col space-y-1'>
            <div className='bg-[#ffffff1A] flex items-center justify-center h-24 w-24 rounded-tr-[40px] rounded-bl-[40px]'>
            <BsLightbulbFill className='h-9 w-9'/>
            </div>
            <h1 className='text-[35px] font-bold'>51 M</h1>
            <span className='text-[16px] sm:text-[19px]'>Australian UGC </span>
        </div>
        <div className='flex items-center justify-center flex-col space-y-1'>
            <div className='bg-[#ffffff1A] flex items-center justify-center h-24 w-24 rounded-tr-[40px] rounded-bl-[40px]'>
            <AiTwotoneHeart className='h-9 w-9'/>
            </div>
            <h1 className='text-[35px] font-bold'>390 M</h1>
            <span className='text-[16px] sm:text-[19px]'>IITCA Green Award

</span>
        </div>
      </div>
      
    </div>
  )
}

export default Awards