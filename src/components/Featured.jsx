import React from 'react'
import FeaturedCard from './FeaturedCard'

function Featured() {
  return (
    <div className='w-screen flex flex-col items-center justify-center space-y-5 my-11'>
        <h1 className='text-[20px] sm:text-[25px] font-bold'>Featured Property Types</h1>
        <p className='text-[15px] sm:text-[19px] font-medium'>Find All Type of Property.</p>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1
         lg:grid-cols-4 xl:grid-cols-5 gap-5 '>
             <FeaturedCard 
             image={'https://funny-daffodil-350bc9.netlify.app/images/hero/h1.png'}
             text={'House & Villa'}
             span={'150 property'}
             />
               <FeaturedCard 
             image={'https://funny-daffodil-350bc9.netlify.app/images/hero/h2.png'}
             text={'New & Villa'}
             span={'10 property'}
             />
               <FeaturedCard 
             image={'https://funny-daffodil-350bc9.netlify.app/images/hero/h3.png'}
             text={'House & Garden'}
             span={'150 House'}
             />
               <FeaturedCard 
             image={'https://funny-daffodil-350bc9.netlify.app/images/hero/h4.png'}
             text={'Plot & Villa'}
             span={'200 Plot'}
             />
               <FeaturedCard 
             image={'https://funny-daffodil-350bc9.netlify.app/images/hero/h6.png'}
             text={'School & Villa'}
             span={'130 property'}
             />
        </div>
    </div>
  )
}

export default Featured