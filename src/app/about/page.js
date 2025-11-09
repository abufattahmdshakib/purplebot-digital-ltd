import React from 'react'
import AboutBanner from '../../../Component/About/AboutBanner'
import Philosophy from '../../../Component/About/Philosophy'
import MemberTeam from '../../../Component/About/MemberTeam'

function About() {
    return (

        <div className="container mx-auto">
            <div className='pt-24 md:pt-18'>
                <div className="flex flex-col justify-between">
                    <div className='flex-1'>
                        <AboutBanner />
                        <div className='bg-gradient-to-r from-[#fff] via-[#fff] to-[#ECB9D6] pt-12'>
                            <MemberTeam />
                            <Philosophy />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About