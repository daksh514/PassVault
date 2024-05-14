import React from 'react'
import { FcCancel } from "react-icons/fc";
function WhyPassVault() {
    return (
        <>
            <div className='w-full  pb-10' id='whyPassVault'>
                <h1 className='mainHeading text-center py-10 text-[#272727] font-[Gabarito]'>You Don't Have To...</h1>
                <div className='flex gap-4 justify-center flex-wrap px-8'>
                    <div className="whyCard">
                        <FcCancel fontSize='25px' />
                        <h1>Think  of a unique password which is not 'qwertyuiop'.</h1>
                    </div>
                    <div className="whyCard">
                        <FcCancel fontSize='25px' />
                        <h1>Remember every single password you make.</h1>
                    </div>
                <div className="whyCard">
                    <FcCancel fontSize='25px' />
                    <h1>Care about your password getting hacked or stolen.</h1>
                </div>
                </div>
                <h1 className='text-center text-sm mt-4 text-[#272727e7]'>Because PassVault will do it for you!</h1>
            </div>
        </>
    )
}

export default WhyPassVault