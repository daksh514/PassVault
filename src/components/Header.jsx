import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'


function Header() {
  return (
    <div className='lg:h-[100vh] bg-[#deeff9] pb-10'>
    <NavBar/>
    <Hero/>
    </div>
  )
}

export default Header