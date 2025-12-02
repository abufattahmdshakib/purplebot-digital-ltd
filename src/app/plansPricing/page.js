import React from 'react'
import PlansPricingBannar from '../../../Component/PlansPricing/PlansPricingBannar.jsx'

function PlansPricing() {
    return (
        <div className="">
            <div className='pt-24 md:pt-18'>
                <div className="flex flex-col justify-between">
                    <div className='flex-1 bg-gradient-to-l from-[#ECB9D6] via-[#FFF] to-[#CCAFDD]'>
                        <PlansPricingBannar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlansPricing