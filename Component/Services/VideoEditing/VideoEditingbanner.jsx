"use client";
import React from "react";
import Image from "next/image";

function VideoEditingbanner() {
    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-2 sm:px-8">
                {/* LEFT SIDE TEXT */}
                <div className="text-center sm:text-left mt-6 sm:mt-0">
                    <h1 className="relative text-[36px] sm:text-[72px] font-[800] leading-tight text-transparent bg-clip-text bg-gradient-to-l from-[#851B67] to-[#C91A7B]">
                       Video Editing & Animation
                        <span className="absolute pb-1 -mb-2 bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C91A7B] via-[#851b678c] to-[#1f021203]"></span>
                    </h1>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="flex justify-center sm:justify-end">
                    <Image
                        src="/assist/vedioediting.webp"
                        alt="Video Editing & Animation"
                        width={500}
                        height={500}
                        className="object-contain mx-auto max-w-[370px] sm:max-w-[600px]"
                    />
                </div>
            </div>

            {/* NEW ANIMATED TEXT SECTION */}
            <div className="my-16 text-center px-2">
                <p className="text-xl sm:text-3xl font-semibold text-purple-700 animate-bounce">
                    [ This page is under construction... Coming soon! ]

                </p>
            </div>
        </section>
    )
}

export default VideoEditingbanner