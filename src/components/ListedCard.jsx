import React from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
function ListedCard({image,name,type,location,price}) {
  return (
    <div className='bg-white shadow-2xl rounded-md '>
        <img src={image} alt='img' />
        <div className='px-4 py-5'>
            <div className='flex items-center justify-between'>
                <p className='font-normal bg-red-200 text-red-600 py-1 px-2'>For Sale</p>
               <AiTwotoneHeart className='h-6 w-6 text-gray-400'/>
            </div>
            <div className='my-5'>
                <p className='font-medium text-[18px]'>{name}</p>
                <p className='flex items-center'><HiLocationMarker className='mr-1'/>{location}</p>
            </div>
            <div className='border-t flex justify-between items-center border-t-gray-300 pt-3'>
               <div className='flex items-center space-x-3 '>
               <button className='bg-[#27ae60] rounded-full p-4 text-[#ffffff] font-medium'>
                {price}
                </button>
                <span>/sqft</span>
               </div>
                <p className='text-[17px] font-medium'>{type}</p>
            </div>
        </div>
    </div>
  )
}

export default ListedCard