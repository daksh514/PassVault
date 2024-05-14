import React from 'react'
import { Link } from 'react-router-dom'


function Pricing() {
  return (
    
    <>
    <div className='bg-[#eff7fc] pb-10' id='pricingSec'>
    <h1 className='mainHeading text-center pt-10 text-[#272727] font-[Gabarito]'>Stop Trying To Remember <br /> Every Password</h1>
    <h1 className='text-center text-base mt-5 text-[#272727e7] max-md:text-sm'>Get PassVault, and let us do it for you!</h1>
    <div className='flex justify-center gap-16 md:max-w-6xl mx-auto md:px-16 w-full flex-wrap mt-8 max-lg:flex-col px-8'>
        <div className='pricingCard'>
            <div>
                <h1 className='text-4xl'>$9</h1>
                <h1 className='text-sm text-[#272727]'>For Casual Forgetters.</h1>
            </div>
            <div className='my-4 flex flex-col gap-3'>
                <h1 className='text-lg font-medium'>Save 25 Passwords</h1>
                <h1 className='text-lg font-medium'>Password Exports in CSV</h1>
                <h1 className='text-lg font-medium'>Lock Passwords</h1>
            </div>
            <div className='w-full'>
            <Link to='/dd' className=' text-white w-full mt-2 h-auto font-semibold text-center py-2 rounded-md bg-[#3F51B5] hover:shadow-md transition-all  block'>Get PassVault</Link>

            </div>
            <h1 className='text-center text-sm mt-1 text-[#272727e7] w-full'>And Yes, <span className='underline'>It's a one-time payment!</span></h1>


        </div>
        <div className='pricingCard border-2 border-[#ff7700]'>
            <div>
                <h1 className='text-4xl'>$19</h1>
                <h1 className='text-sm text-[#272727]'>For Ultimate Forgetters.</h1>
            </div>
            <div className='my-4 flex flex-col gap-3'>
                <h1 className='text-lg font-medium'>Save Unlimited Passwords</h1>
                <h1 className='text-lg font-medium'>Password Exports in CSV</h1>
                <h1 className='text-lg font-medium'>Lock Passwords</h1>
            </div>
            <div className='w-full'>
            <Link to='/dd' className=' text-white w-full mt-2 h-auto font-semibold text-center py-2 rounded-md bg-[#3F51B5] hover:shadow-md transition-all  block'>Get PassVault</Link>

            </div>
            <h1 className='text-center text-sm mt-1 text-[#272727e7] w-full'>And Yes, <span className='underline'>It's a one-time payment!</span></h1>

        </div>
    </div>
    </div>
    </>
  )
}

export default Pricing