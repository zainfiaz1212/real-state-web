import React from 'react'

function FeaturedCard({image,text,span}) {
  return (
    <div className='flex flex-col justify-center items-center space-y-3 py-6 px-[40px] cursor-pointer
    transition hover:scale-95 bg-white
    shadow-md rounded-lg'>
      <img className='h-16 w-16' src={image} alt='image' />
      <p className='text-[17px] font-medium'>{text}</p>
      <span className='text-[16px]'>{span}</span>
    </div>
  )
}

export default FeaturedCard