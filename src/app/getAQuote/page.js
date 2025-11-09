import React from 'react'
import GetStartedForm from '../../../Component/PlansPricing/GetStartedForm'

function GetAQuote() {
    return (
        <div className="container mx-auto">
            <div className='pt-24 md:pt-18'>
                <div className="flex flex-col justify-between">
                    <div className='flex-1 bg-gradient-to-l from-[#ECB9D6] via-[#FFF] to-[#CCAFDD]'>
                        <GetStartedForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetAQuote