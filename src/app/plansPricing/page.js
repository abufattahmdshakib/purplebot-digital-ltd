import React from 'react'
import PlansPricingBannar from '../../../Component/PlansPricing/PlansPricingBannar.jsx'
import LetsTalk from '../../../Component/Home/LetsTalk'

function PlansPricing() {
    return (
        <div className="container mx-auto">
            <div className='pt-24 md:pt-18'>
                <div className="flex flex-col justify-between">
                    <div className='flex-1'>
                        <PlansPricingBannar />
                        <LetsTalk /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlansPricing