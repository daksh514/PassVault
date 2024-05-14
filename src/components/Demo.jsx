import React from 'react'

function Demo() {
  return (
    <>
    <div id='demoSec' className='w-full flex-col flex items-center'>
    <h1 className='mainHeading text-center pt-10 text-[#272727] font-[Gabarito]'>Don't Worry, It's Simple!</h1>
    <h1 className='text-center text-base mt-5 text-[#272727e7] max-md:text-sm'>Using PassVault is simple! Here's a demo.</h1>
    <div className=' max-sMD:px-7 max-sMD:max-w-6xl flex w-full px-16 max-w-5xl justify-center max-md:px-8'>

    <iframe width="100%" height="auto" className='aspect-video mt-10 mx-auto rounded-lg ' src="https://www.youtube.com/embed/Em8puhjUfQ4?si=lTTE9nRP61SynUnR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    </div>
    </>
  )
}

export default Demo