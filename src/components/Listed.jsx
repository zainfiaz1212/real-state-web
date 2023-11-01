import React from 'react'
import ListedCard from './ListedCard'

function Listed() {
  return (
    <div className='w-screen my-24 flex flex-col items-center justify-center space-y-5'>
        <h1 className='text-[20px] sm:text-[25px] font-bold'>Featured Property Types</h1>
        <p className='text-[14px] sm:text-[19px] text-gray-500 font-normal max-w-[600px] text-center'>Lorem
         ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam.</p>
       <div className='grid max-w-[1100px] sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-3 sm:mx-5 lg:mx-11'>
       <ListedCard 
        image={'https://funny-daffodil-350bc9.netlify.app/images/list/p-1.png'}
        rent={'For Rent'}
        name={'Red Carpet Real Estate'}
        location={' 210 Zirak Road, Canada'}
        price={'2300$'}
        type={'Commercial'}
       alt='' />
        <ListedCard 
        image={'https://funny-daffodil-350bc9.netlify.app/images/list/p-2.png'}
        rent={'New Offer'}
        name={'Red Carpet Real Estate'}
        location={' 210 Zirak Road, Canada'}
        price={'450$'}
        type={'Office'}
       alt='' />
        <ListedCard 
        image={'https://funny-daffodil-350bc9.netlify.app/images/list/p-7.png'}
        rent={'Sharing'}
        name={'Red Carpet Real Estate'}
        location={' 210 Zirak Road, Canada'}
        price={'400$'}
        type={'Appartment'}
       alt='' />
        <ListedCard 
        image={'https://funny-daffodil-350bc9.netlify.app/images/list/p-6.png'}
        rent={'Hot Offer'}
        name={'Red Carpet Real Estate'}
        location={' 210 Zirak Road, Canada'}
        price={'230$'}
        type={'House'}
       alt='' />
        <ListedCard 
        image={'https://funny-daffodil-350bc9.netlify.app/images/list/p-4.png'}
        rent={'For Sale'}
        name={'Red Carpet Real Estate'}
        location={' 210 Zirak Road, Canada'}
        price={'200$'}
        type={'Flat'}
       alt='' />
        <ListedCard 
        image={'https://funny-daffodil-350bc9.netlify.app/images/list/p-5.png'}
        rent={'For Sale'}
        name={'Red Carpet Real Estate'}
        location={' 210 Zirak Road, Canada'}
        price={'200$'}
        type={'Hostel'}
       alt='' />
    
      
       </div>
    </div>
  )
}

export default Listed