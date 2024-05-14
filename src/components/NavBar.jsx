import React, { useState } from 'react'
import { Link as ScrLink } from 'react-scroll'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

function NavBar() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <>
            <nav className='flex justify-between py-7 px-1 items-center mx-auto max-w-6xl container max-lg:max-w-5xl max-lg:px-10'>
                <div className='logo'>
                    <Link to='/' className='text-[#2f303c] text-lg font-bold'>PassVault</Link>
                </div>
                <div className='nav_links w-1/4 min-w-[237px] hidden md:block'>
                    <ul className='md:flex justify-between '>
                        {/* <li className="1"><a href="#" className='navLink'>Why PassVault</a></li> */}
                        <li className="2"><ScrLink to="demoSec" duration={600} smooth className='navLink' offset={-10}>Demo</ScrLink></li>
                        <li className="3"><ScrLink to="demoSec" duration={600} smooth className='navLink' offset={-10}>Privacy</ScrLink></li>
                        <li className="4"><ScrLink to="demoSec" duration={600} smooth className='navLink' offset={-10}>Pricing</ScrLink></li>
                        <li className="4"><ScrLink to="demoSec" duration={600} smooth className='navLink' offset={-10}>FAQ</ScrLink></li>
                    </ul>
                </div>
                <div className='CTA max-md:hidden'>
                    <Link to='/' className='text-sm bg-white px-2 py-2 rounded-md font-semibold shadow-md hover:shadow-lg transition-all'>Get Started</Link>
                </div>
                <div className='menu md:hidden'>
                    <IoMdMenu fontSize='25px' onClick={()=>{setNavOpen(true)}} />
                </div>
            </nav>
            {
                navOpen && <div className=" bg-gray-200 sm:w-1/2 z-50 fixed right-0 w-full top-0 h-screen">
                    <div className='flex justify-between mx-auto w-full px-8 py-7'>
                        <Link to='/' className='text-[#2f303c] text-lg font-bold'>PassVault</Link>
                        <IoMdClose fontSize='25px' onClick={()=>{setNavOpen(false)}}/>
                    </div>
                    <div>
                    <div className='nav_links  bg-blak flex items-center flex-col'>
                    <ul className=' '>
                    <li className="2 text-center mt-3"><ScrLink to="demoSec" duration={600} smooth className='navMobile' onClick={()=>{if(navOpen){setNavOpen(false)}}} offset={-10}>Demo</ScrLink></li>
                        <li className="3 text-center mt-3"><ScrLink to="demoSec" duration={600} smooth className='navMobile' onClick={()=>{if(navOpen){setNavOpen(false)}}} offset={-10}>Privacy</ScrLink></li>
                        <li className="4 text-center mt-3"><ScrLink to="demoSec" duration={600} smooth className='navMobile' onClick={()=>{if(navOpen){setNavOpen(false)}}} offset={-10}>Pricing</ScrLink></li>
                        <li className="4 text-center mt-3"><ScrLink to="demoSec" duration={600} smooth className='navMobile' onClick={()=>{if(navOpen){setNavOpen(false)}}} offset={-10}>FAQ</ScrLink></li>
                    </ul>
                    
                <div className='CTA mt-5 w-full px-5'>
                    <Link to='/' className='text-sm bg-white px-2 py-2 rounded-md font-semibold shadow-md hover:shadow-lg transition-all w-full block text-center'>Get Started</Link>
                    <Link to='/' className='text-sm bg-[#3F51B5] px-2 py-2 rounded-md font-semibold shadow-md hover:shadow-lg transition-all w-full block text-center mt-4 text-white'>LogIn</Link>
                </div>
                </div>
                    </div>
                </div>
            }

        </>
    )
}

export default NavBar