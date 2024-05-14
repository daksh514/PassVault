import React from 'react'

function Privacy() {
    return (
        <>
            <div id='privacySec' className=' mt-10 pb-14 flex items-center flex-col w-[100%]'>
                <h1 className='mainHeading text-center pt-10 text-[#272727] font-[Gabarito]'>And Yes, It's Fully Encrypted!</h1>
                <h1 className='text-center text-base mt-5 text-[#272727e7] max-md:text-sm w-[90vw]'>Anyone except you doesn't know what is saved!</h1>
                <div className='flex justify-between md:max-w-5xl mx-auto md:px-16 w-full flex-wrap mt-8'>
                    <div className='grow flex flex-col items-center  max-md:min-w-[300px]'>
                        <h1 className='text-lg text-center'>What You Save</h1>
                        <img src="https://tse3.mm.bing.net/th?id=OIP._uDt6UOKoHqYjv_s-3CRdAHaHa&pid=Api&P=0&h=180" className='md:mt-5 w-3/4 aspect-video max-w-[340px] mt-2 max-md:mb-5' alt="" />
                    </div>
                    <div className='grow flex flex-col items-center  max-md:min-w-[300px]'>
                        <h1 className='text-lg text-center'>What We See</h1>
                        <img src="https://tse3.mm.bing.net/th?id=OIP._uDt6UOKoHqYjv_s-3CRdAHaHa&pid=Api&P=0&h=180" className='md:mt-5 w-3/4 aspect-video max-w-[340px] mt-2' alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Privacy