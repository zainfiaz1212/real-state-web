import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {AiOutlineMenu} from 'react-icons/ai'

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth <= 500);
        }
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    
    return (
    <div className='py-4 md:px-9 sm:px-4 px-1 lg:px-16 flex items-center shadow-2xl justify-between'>
        <div>
            <img className='h-9' src={logo} alt='' />
        </div>
        <div className='hidden lg:flex'>
            <ul className='flex items-center space-x-4'>
              <li className='header-li'>Home</li>
              <li className='header-li'>About</li>
                <li className='header-li'>Services</li>
                <li className='header-li'>Blog</li>
                <li className='header-li'>Pricing</li>
                <li className='header-li'>Contact</li>

            </ul>
        </div>
        <div className='flex space-x-4 items-center'>
            <p className='bg-[#27ae60] h-7 w-7 rounded-full pl-[10px] text-[#ffffff] pb-[-4px]'>2</p>
            <p className='header-li hidden sm:flex'>My List</p>
            <button onClick={toggleMenu} className='bg-[#27ae60] relative  flex items-center p-3 rounded-md text-[#ffffff]'>
              {isMobile ? <AiOutlineMenu className='h-6 w-6 mx-2'/> : <HiOutlineExternalLink className='h-6 w-6 mx-2'/>
              }   {isMobile ? 'Menu' : 'Sign in'}</button>
               {!isMenuOpen  && <ul className='lg:hidden flex flex-col shadow-xl 
              z-20 absolute top-[70px] px-9 py-5 bg-white
               right-11 items-center space-y-6'>
                <li className='header-li'>Home</li>
                <li className='header-li' href='/price'>About</li>
                <li className='header-li'>Services</li>
                <li className='header-li'>Blog</li>
                <li className='header-li'>Pricing</li>
                <li className='header-li'>Contact</li>

            </ul> 
            }
                 
        </div>
    </div>
  )
}

export default Header