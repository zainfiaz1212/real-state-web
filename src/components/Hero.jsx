import React from 'react'
import banner from'../assets/images/banner.png'
import {CiSearch} from 'react-icons/ci'
function Hero() {
  return (
    <div className='w-screen relative h-[500px]'>
        
     <img src={banner} className='w-screen h-full object-cover ' alt='banner' />
     <div className='absolute top-0'>
        <div className='flex flex-col w-screen h-[500px] items-center justify-center'>
        <h1 className='text-[#ffffff] font-medium md:text-[30px] text-[25px] lg:text-[50px]
         text-center'>Search Your Next<br/> Home</h1>
         <p className='text-gray-400 text-[13px] sm:text-[18px] '>Find new & featured property located in your local city.</p>
         <form className='bg-white rounded-md  lg:flex hidden my-5 px-5 py-4 space-x-3'>
            <div className='for'>
              <span  className='spa'>City/Street</span>
              <input className='for-i' type='text' placeholder='Location' />
            </div>
            <div className='for'>
              <span className='spa'>Property Type</span>
              <input className='for-i' type='text' placeholder='Property Type' />
            </div>
            <div className='for'>
              <span className='spa'>Price Range</span>
              <input className='for-i' type='text' placeholder='Price Range' />
            </div>
            <div className='for'>
              <h4>Advance <br/>Filter</h4>
            </div>
            <button className='bg-[#27ae60] px-5 rounded-full'>
                 <CiSearch className='h-6 w-6 text-white'/>
            </button>
          </form>

        </div>

     </div>
     
    </div>
  )
}

export default Hero