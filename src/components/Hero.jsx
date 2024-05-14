import React from 'react'
import { Link } from 'react-router-dom'
import Generator from './Generator'


function Hero() {
  return (
    <>
      <div className='w-screen  lg:h-[80vh] lg:max-h-[700px] mx-auto max-w-6xl px-1 flex justify-between max-lg:flex-col max-lg:items-center'>
        <div className='w-1/2 flex items-start max-lg:mt-10 mt-36 flex-col justify-between h-1/3 sm:min-w-[456px] max-sm:min-w-[300px]'>
          <h1 className='mainHeading text-[#272727]'>Make password management <span className='text-[#ff7700] drop-shadow-lg'>Easy & Effortless.</span></h1>
          <h1 className='mt-4 text-md text-[#272727cc] max-lg:text-center max-lg:text-sm max-sm:hidden'>No need to remember passwords ever again, just save them in PassVault and come back anytime again to get your passwords!</h1>
          <h1 className='mt-4 text-md text-[#272727cc] max-lg:text-center max-lg:text-sm sm:hidden'>No need to remember passwords ever again, just save them in PassVault!</h1>
          <Link to='/dd' className=' text-white w-full h-auto font-semibold text-center py-2 rounded-md mt-8 bg-[#3F51B5] tex231942t-white hover:shadow-md transition-all max-lg:w-2/3 max-lg:mx-auto max-sm:text-sm max-sm:w-full'>Get Started Saving Passwords</Link>
      {/* <h1 className='max-lg:hidden text-center text-sm text-[#515151fe] mt-2'>Scroll below to see how this can save you hours👇</h1> */}
        </div>
        <div className='lg:w-1/2 flex items-center justify-end lg:h-[70vh] lg:max-h-[570px] max-lg:justify-center max-lg:mt-10 lg:min-h-[510px]'>
          <Generator />
        </div>
      </div>
    </>
  )
}

export default Hero