"use client";
import React from 'react'
import Branding from '../../../../Component/Services/BrandingGraphics/Branding';

function BrandingGraphics() {
  return (
    <div className="container mx-auto bg-gradient-to-r from-[#ccafdda9] via-[#fff] to-[#fff]">
      <div className='pt-4 sm:pt-6'>
        <div className="flex flex-col justify-between">
          <div className='flex-1'>
            <div className=' pt-12 relative z-0'>
              <Branding />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandingGraphics