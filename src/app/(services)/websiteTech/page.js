"use client";

import React from 'react'
import WebsiteTechBanner from '../../../../Component/Services/WebsiteTechBanner/WebsiteTechBanner';
import UiUxDesign from '../../../../Component/Services/WebsiteTechBanner/UiUxDesign';
import CustomTech from '../../../../Component/Services/WebsiteTechBanner/CustomTech';
import Website from '../../../../Component/Services/WebsiteTechBanner/Website';

function WebsiteTech() {
    return (
        <div className="bg-gradient-to-r from-[#ccafdda9] via-[#fff] to-[#fff]">
            <div className='pt-4 sm:pt-6'>
                <div className="flex flex-col justify-between">
                    <div className='flex-1'>
                        <div className='container mx-auto pt-12 relative z-0 overflow-x-hidden'>
                            <WebsiteTechBanner />
                            <UiUxDesign />
                            <Website />
                            <CustomTech />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebsiteTech