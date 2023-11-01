import React from 'react'
import AgentsCard from './AgentsCard'

function Agents() {
  return (
    <div className='w-screen flex flex-col items-center justify-center space-y-5 my-11'>
        <h1 className='text-[20px] sm:text-[25px] font-bold'>Our Featured Agents</h1>
        <p className='text-[15px]
         sm:text-[19px] text-gray-600 max-w-[600px] text-center font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<div className='grid md:grid-cols-2 gap-9 lg:grid-cols-3'>
<AgentsCard 
     rent={'For Rent'}
     name={'Red Carpet Real Estate'}
     location={' 210 Zirak Road, Canada'}
     message={'Message'}
     call={'Call'}
     listing={'23'}
    image={'https://funny-daffodil-350bc9.netlify.app/images/customer/team-2.jpg'}/>
        <AgentsCard 
     rent={'For Rent'}
     name={'Red Carpet Real Estate'}
     location={' 210 Zirak Road, Canada'}
     message={'Message'}
     call={'Call'}
     listing={'43'}
    image={'https://funny-daffodil-350bc9.netlify.app/images/customer/team-3.jpg'}/>
     <AgentsCard 
     rent={'For Rent'}
     name={'Red Carpet Real Estate'}
     location={' 210 Zirak Road, Canada'}
     message={'Message'}
     listing={'302'}
     call={'Call'}
    image={'https://funny-daffodil-350bc9.netlify.app/images/customer/team-5.jpg'}/>
     <AgentsCard 
     rent={'For Rent'}
     name={'Red Carpet Real Estate'}
     location={' 210 Zirak Road, Canada'}
     message={'Message'}
     call={'Call'}
     listing={'502'}
    image={'https://funny-daffodil-350bc9.netlify.app/images/customer/team-2.jpg'}/>
          <AgentsCard 
     rent={'For Rent'}
     name={'Red Carpet Real Estate'}
     location={' 210 Zirak Road, Canada'}
     message={'Message'}
     listing={'202'}
     call={'Call'}
    image={'https://funny-daffodil-350bc9.netlify.app/images/customer/team-3.jpg'}/>
     <AgentsCard 
     rent={'For Rent'}
     name={'Red Carpet Real Estate'}
     location={' 210 Zirak Road, Canada'}
     message={'Message'}
     listing={'34'}
     call={'Call'}
    image={'https://funny-daffodil-350bc9.netlify.app/images/customer/team-2.jpg'}/>

</div>
    </div>
  )
}

export default Agents