"use client";
import React from "react";
import Image from "next/image";

const AboutBanner = () => {
    return (
        <section className="px-2 md:px-8 pb-18 pt-18 md:pt-26 mt-0 relative -top-16 z-10 bg-gradient-to-r from-[#ccafdd] via-[#fff] to-[#fff] overflow-hidden">

            {/* Shape Wrapper */}
            <div className="shape-wrapper relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">

                {/* Background Shape */}
                <div className="shape absolute inset-0 z-0 pointer-events-none"></div>

                {/* LEFT SIDE */}
                <div className="w-full md:w-3/4 px-2 md:px-0 pl-0 md:pl-12 py-0 md:py-10 text-center md:text-left text-black relative z-10">
                    <h4 className="text-[28px] md:text-[36px] font-[400] text-black mt-5 mb-2">
                        We are a
                    </h4>

                    <h1 className="text-[28px] md:text-[52px] font-bold leading-tight mb-4 bg-gradient-to-r from-[#c71a7a] to-[#9e1b6e] bg-clip-text text-transparent">
                        Digital-First Creative
                        <br /> & Advertising Agency
                    </h1>

                    <p className="font-[700] text-[18px] md:text-[22px] text-black mb-4">
                        We helped brands stand out in digital media and beyond.
                    </p>

                    <p className="text-[18px] md:text-[22px] font-[500] text-black mb-3">
                        Starting from strategy to every step of execution, we served as
                        partners in driving growth for{" "}
                        <span className="font-[700]">100+ businesses.</span>
                    </p>

                    <p className="text-[18px] md:text-[22px] font-[500] text-black mb-6">
                        Our work has allowed us to be recognized as an{" "}
                        <span className="font-[700]">award-winning</span> agency!
                    </p>

                    {/* Partner Logo */}
                    <div className="flex justify-center md:justify-start items-center gap-4 flex-wrap">
                        <div className="relative w-[200px] md:w-[160px] h-[60px]">
                            <Image
                                src="/assist/digital-first-award.webp"
                                alt="Bangladesh Brand Forum"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE IMAGES */}
                <div className="relative w-full md:w-2/3 flex justify-center items-center -mt-4 md:mt-0 z-10 overflow-visible">
                    {/* Animated Background Image */}
                    <div className="absolute right-12 md:right-0 inset-0 flex justify-center items-center animate-scaleLoop z-10 pointer-events-none">
                        <Image
                            src="/assist/logo-faded.webp"
                            alt="Background Shape"
                            width={500}
                            height={500}
                            className="opacity-90 md:opacity-100 object-contain"
                        />
                    </div>

                    {/* Main Character Image (increased size) */}
                    <div className="relative left-0 md:left-18 top-0 md:-top-6 z-20 flex justify-center items-center w-full mx-auto pointer-events-none">
                        <Image
                            src="/assist/award-win 1.svg"
                            alt="Main Character"
                            width={500}  
                            height={500}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;
