"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function ExploreOurWork() {
    const images = [
        "/assist/marq.webp",
        "/assist/marq (2).webp",
        "/assist/marq (3).webp",
        "/assist/marq (4).webp",
        "/assist/marq (5).webp",
        "/assist/marq (6).webp",
        "/assist/marq (7).webp",
        "/assist/marq (8).webp",
        "/assist/marq (9).webp",
        "/assist/marq (10).webp",
        "/assist/marq (11).webp",
        "/assist/marq (12).webp",
        "/assist/marq (13).webp",
        "/assist/marq (14).webp",
        "/assist/marq (15).webp",
        "/assist/marq (16).webp",
        "/assist/marq (17).webp",
        "/assist/marq (18).webp",
        "/assist/marq (19).webp",
        "/assist/marq (20).webp",
        "/assist/marq (21).webp",
        "/assist/marq (22).webp",
    ];

    return (
        <div>
            {/* Button & Title Section */}
            <div className="flex flex-col items-center text-center space-y-4 py-9 md:py-18">
                <button className="relative text-[18px] text-center md:text-[22px] inline-flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer">
                    <span className="flex items-center gap-2 transform transition-transform duration-700 translate-x-4 group-hover:-translate-x-3">
                        Explore Our Work
                        <ArrowRight
                            size={26}
                            strokeWidth={3}
                            className="opacity-0 translate-x-[5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                        />
                    </span>
                </button>

                <p className="font-poppins text-black text-[22px] md:text-[25px] font-[600] md:font-[800] leading-[150%] mt-6">
                    Trusted by renowned multi-nationals, startups, and SMEs
                </p>
            </div>

            {/* Animated Images Section */}
            <div className="overflow-hidden  w-full pb-18 relative">
                <motion.div
                    className="flex"
                    style={{ width: "max-content" }}
                    animate={{ x: ["0%", "-50%"] }} // scroll half, because images are duplicated
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // smooth speed
                            ease: "linear",
                        },
                    }}
                >
                    {/* Duplicate images for seamless scroll */}
                    {[...images, ...images].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`work-${i}`}
                            className="w-[100px] h-[80px] md:w-[110px] md:h-[80px] object-cover mr-8 md:mr-24"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default ExploreOurWork;
