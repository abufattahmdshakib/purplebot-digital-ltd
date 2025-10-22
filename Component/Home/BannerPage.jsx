"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BannerPage = () => {
    const [yValues, setYValues] = useState(["50px", "-50px"]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setYValues(["-20px", "20px"]);
            } else {
                setYValues(["50px", "-50px"]);
            }
        };

        handleResize(); // Initial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="min-h-screen md:bg-gradient-to-r from-[#d2dcf1] via-[#FFFFFF] to-[#F3DEEE]">
            <section className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-2 md:px-24 ">
                {/* Left Side */}
                <div className="flex-[0.2] md:flex-[0.9] text-center md:text-left space-y-2 md:space-y-4 ">
                    <h1
                        className="font-poppins font-black text-center md:text-left 
             text-[28px] sm:text-[36px] md:text-[60px] lg:text-[90px] 
             leading-[1.5] md:leading-[1.0]"
                        style={{
                            background: "linear-gradient(237deg, #851B67 4.91%, #C81A7A 98.1%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Digital. Design. Tech.
                    </h1>
                    <p className="text-[#000] text-[16px] md:text-[32px] max-w-[350px] mx-auto md:mx-0 font-normal">
                        Expert solutions tailored to your brand
                    </p>
                    <button className="relative text-[18px] text-center md:text-[22px] inline-flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer">
                        <span className="flex items-center gap-2 transform transition-transform duration-700  translate-x-4 group-hover:-translate-x-3">
                            Get Started
                            <ArrowRight
                                size={26}
                                strokeWidth={3}
                                className="opacity-0 translate-x-[5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                            />
                        </span>
                    </button>
                </div>

                {/* Right Side */}
                <div className="flex-[1.2] md:flex-[1.3] flex justify-center md:justify-end mt-0 md:mt-0">
                    <motion.div
                        animate={{ y: yValues }}
                        transition={{
                            duration: 2,
                            delay: 1,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            repeatDelay: 0.5,
                        }}
                    >
                        <Image
                            src="/assist/purple bot 22 1.svg"
                            alt="Banner Illustration"
                            width={600}
                            height={600}
                            className="drop-shadow-2xl mx-auto px-4 md:px-0"
                            priority
                        />
                    </motion.div>
                </div>
            </section>
        </section>
    );
};

export default BannerPage;
