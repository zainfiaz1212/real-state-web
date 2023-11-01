import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import {IoCallSharp} from 'react-icons/io5'
import {BiSolidMessageAltDetail} from 'react-icons/bi'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
function AgentsCard({image,name,call,location,message,listing}) {
  return (
    <div className='bg-white shadow-3xl rounded-md px-3 flex flex-col items-center space-y-3 py-4'>
        <p className='bg-orange-600 rounded-full py-3 px-5 font-medium text-center text-white ml-[-100px]'>{listing} Listing</p>
<div className='border-2 border-gray-300 rounded-full  h-[120px] my-4 w-[120px]'>
<img src={image} alt='img' className='rounded-full p-2 ' />
</div>
        <div className='px-4 py-5 flex flex-col items-center'>
        <p className='flex items-center'><HiLocationMarker className='mr-1'/>{location}</p>
           
            <div className='my-5'>
                <p className='font-medium text-[18px]'>{name}</p>
            </div>
            <div className='flex justify-between pb-4 items-center space-x-5 text-gray-300'>
                <BsFacebook className='h-6 w-6'/>
                <BsTwitter  className='h-6 w-6'/>
                <RiInstagramFill  className='h-6 w-6'/>
                <BsYoutube  className='h-6 w-6'/>
            </div>
               <div className='flex items-center space-x-3 my-3'>
               <button className='bg-[#27ae60] p-4 flex items-center justify-between text-[#ffffff] font-medium'>
                <BiSolidMessageAltDetail className='h-6 w-6 mr-2'/>
                {message}
                </button>
                <button className='bg-[#333] flex items-center justify-between p-4 text-[#ffffff] font-medium'>
                 <IoCallSharp  className='h-6 w-6 mr-2'/>
                {call}
                </button>
               </div>
        </div>
    </div>
  )
}

export default AgentsCard