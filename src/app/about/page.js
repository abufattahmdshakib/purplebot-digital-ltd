"use client";

import React, { useState, useEffect } from 'react';
import AboutBanner from '../../../Component/About/AboutBanner'
import Philosophy from '../../../Component/About/Philosophy'
import MemberTeam from '../../../Component/About/MemberTeam'
import Experience from '../../../Component/About/Experience'

function About() {

    const [bgStyle, setBgStyle] = useState({
        backgroundImage: "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "125% 100%",
        backgroundPosition: "-70px 0",
    });

    useEffect(() => {
        const updateBgStyle = () => {
            if (window.innerWidth >= 768) {
                setBgStyle({
                    backgroundImage: "url('/assist/BannerBg.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "110% 100%",
                    backgroundPosition: "-70px 0",
                });
            } else {
                setBgStyle({
                    backgroundImage: "url('/assist/BannerBg.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "110% 100%",
                    backgroundPosition: "-10px 0",
                });
            }
        };

        updateBgStyle();
        window.addEventListener("resize", updateBgStyle);
        return () => window.removeEventListener("resize", updateBgStyle);
    }, []);

    return (

        <div className="container mx-auto">
            <div className='pt-24 md:pt-18'>
                <div className="flex flex-col justify-between">
                    <div className='flex-1'>
                        <AboutBanner />
                        <Experience />
                        <div style={bgStyle} className=' pt-12 relative z-0'>
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