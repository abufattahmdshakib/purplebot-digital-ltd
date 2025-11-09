import React from 'react'
import OurWorkPhotos from '../../../Component/OurWork/OurWorkPhotos'

function OurWork() {
    return (
        <div className="container mx-auto">
            <div className='pt-24 md:pt-18'>
                <div className="flex flex-col justify-between">
                    <div className='flex-1 bg-gradient-to-l from-[#ECB9D6] via-[#fff]  to-[#CCAFDD]'>
                        <OurWorkPhotos />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWork