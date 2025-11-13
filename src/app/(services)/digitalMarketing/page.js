"use client";
import React from 'react';
import DigitalMarketingHome from '../../../../Component/Services/DigitalMarketing/DigitalMarketingHome'
import SocialMedia from '../../../../Component/Services/DigitalMarketing/SocialMedia';
import Subscription from '../../../../Component/Services/DigitalMarketing/Subscription';
import DigitalAds from '../../../../Component/Services/DigitalMarketing/DigitalAds';
import SeoSem from '../../../../Component/Services/DigitalMarketing/SeoSem';

function DigitalMarketing() {


    return (
        <div className="container mx-auto bg-gradient-to-r from-[#ccafdda9] via-[#fff] to-[#fff]">
            <div className='pt-4 sm:pt-6'>
                <div className="flex flex-col justify-between">
                    <div className='flex-1'>
                        <div className=' pt-12 relative z-0'>
                            <DigitalMarketingHome />
                            <SocialMedia />
                            <Subscription />
                            <DigitalAds />
                            <SeoSem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalMarketing