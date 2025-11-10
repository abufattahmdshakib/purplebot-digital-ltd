import React from "react";

function MemberTeam() {
    return (
        <div className="relative text-center pb-10 pt-[280px] overflow-hidden group z-0">
            {/* Cloud Images */}
            <img
                src="/assist/cloud-1.webp"
                alt="Cloud left"
                className="absolute top-[330px] left-[-250px] w-[200px] opacity-0 z-0
        transition-all duration-[1000ms] ease-in-out 
        group-hover:left-[0px] group-hover:opacity-100"
            />

            <img
                src="/assist/cloud-1.webp"
                alt="Cloud right"
                className="absolute top-[150px] right-[-250px] w-[250px] opacity-0 z-30
        transition-all duration-[1000ms] ease-in-out 
        group-hover:right-[40px] group-hover:opacity-100"
            />

            {/* Hero Image */}
            <div className="w-full flex justify-center -mb-28 sm:-mb-96 -mt-26 sm:-mt-60 relative z-10">
                <img
                    src="/assist/about-us-hero-image.svg"
                    alt="About Us Hero"
                    className="w-full sm:w-[95%] object-contain"
                />
            </div>

            {/* Heading */}
            <h1 className="text-[40px] md:text-[62px] font-[800] leading-12 sm:leading-14 text-transparent bg-clip-text bg-gradient-to-t from-[#851B67] to-[#C81A7A] mb-2 relative z-20">
                24+ Member Team
            </h1>

            {/* Description */}
            <p className="text-[16px] sm:text-[22px] px-1 font-[500] text-black mb-5 sm:mb-10 relative z-20">
                Specialize across our client services, planning, and creatives department.
            </p>

            {/* Sub Images */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-6 relative z-20">
                <img src="/assist/about-us-sub-images.svg" alt="Team member 1" className="w-26 h-26 sm:w-46 sm:h-46 object-contain rounded-lg" />
                <img src="/assist/about-us-sub-images2.svg" alt="Team member 2" className="w-26 h-26 sm:w-46 sm:h-46 object-contain rounded-lg" />
                <img src="/assist/about-us-sub-images3.svg" alt="Team member 3" className="w-26 h-26 sm:w-46 sm:h-46 object-contain rounded-lg" />
            </div>
        </div>
    );
}

export default MemberTeam;
