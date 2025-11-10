import React from "react";

function Experience() {
    return (
        <section className="relative ">
            {/* Container */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-4 sm:px-0 px-2">

                {/* Left Side */}
                <div className="md:w-3/8 flex flex-col items-start justify-start pl-4 sm:pl-18 mt-0 sm:mt-16 mb-5 sm:mb-0">
                    <h1 className="text-[46px] sm:text-[56px] font-[900] leading-[1.1] text-transparent bg-clip-text bg-gradient-to-l from-[#9e1b6e] to-[#C81A7A] text-left">
                        8+ Years of <br /> Experience
                    </h1>
                    <p className="relative text-[26px] md:text-[32px] font-[600] text-black text-left">
                        In empowering brands
                        <span className="absolute pb-1 -mb-1 bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#37174a] via-[#1f02126c] to-[#1f021203]"></span>
                    </p>
                </div>

                {/* Right Side */}
                <div className="sm:w-5/8 text-black space-y-4 sm:space-y-6  text-[16px] sm:text-[22px] font-[400] border-t border-l border-b border-[#fd73bf] rounded-tl-[36px] sm:rounded-tl-[56px] rounded-bl-[36px] sm:rounded-bl-[56px] px-5 sm:px-16 py-4 sm:py-8 leading-[1.5] z-40">
                    <p>
                        As the advertising landscape continues to evolve, our focus remains clear: 
                        <strong> driving growth</strong> for our clients and partners. With <strong>8 years of diverse experience</strong>
                        and a portfolio of <strong>over 100 clients</strong> across various industries.
                    </p>
                    <p>
                        Throughout the years, we have nurtured a team of young and creative professionals,
                        each specialized in their own area of expertise. This team is energetic, curious and
                        eager to explore, thus never out of fresh ideas for our clients.
                    </p>
                    <p>
                        We are committed to remain on top of the never-ending transformation of customer behavior,
                        especially that of the newer generations. We continue our journey through the transformative
                        period of the advertising landscape, with one goal in mind — success for our clients and partners.
                    </p>
                </div>
            </div>

            {/* Runner Image (Bottom Full Width) */}
            <div className="w-full flex justify-center -mb-72 sm:-mb-96 mt-0 sm:-mt-48">
                <img
                    src="/assist/runner-3s-long 1.svg"
                    alt="Runner"
                    className="w-full max-w-7xl object-contain z-[10]"
                />
            </div>
        </section>
    );
}

export default Experience;
