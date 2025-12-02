"use client";
import React from 'react'
import Branding from '../../../../Component/Services/BrandingGraphics/Branding';
import LogoandBrand from '../../../../Component/Services/BrandingGraphics/LogoandBrand';
import PrintMaterial from '../../../../Component/Services/BrandingGraphics/PrintMaterial';
import CustomArt from '../../../../Component/Services/BrandingGraphics/CustomArt';
import Merchandise from '../../../../Component/Services/BrandingGraphics/Merchandise';
import Packaging from '../../../../Component/Services/BrandingGraphics/Packaging';

function BrandingGraphics() {
  return (
    <div className=" bg-gradient-to-r from-[#ccafdda9] via-[#fff] to-[#fff]">
      <div className='pt-4 sm:pt-6'>
        <div className="flex flex-col justify-between">
          <div className='flex-1'>
            <div className=' pt-12 relative container mx-auto z-0 overflow-x-hidden'>
              <Branding />
              <LogoandBrand />
              <PrintMaterial />
              <CustomArt />
              <Merchandise />
              <Packaging />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandingGraphics