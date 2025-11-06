import React from 'react'
import AboutBanner from '../../../Component/About/AboutBanner'

function About() {
    return (

        <div className="container mx-auto">
            <div className='pt-24 md:pt-18'>
                <div className="flex flex-col justify-between">
                    <div className='flex-1'>
                        <AboutBanner />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About