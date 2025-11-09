"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const BannerPage = () => {
  const [bgImage, setBgImage] = useState("none");
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setBgImage("url('/assist/BannerBg.png')");
    }
  }, []);

  const [yValues, setYValues] = useState(["50px", "-50px"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setYValues(["-20px", "20px"]);
      } else {
        setYValues(["50px", "-50px"]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative md:bg-cover md:bg-center md:bg-no-repeat"
      style={{
        backgroundImage: bgImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "115% 100%",
        backgroundPosition: "-150px 0",
      }}
    >
      {/* Rest of your content */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-2 md:px-4 pt-4 gap-6">
        {/* Left Side */}
        <div className="flex-[1] md:flex-[0.9] text-center md:text-left space-y-3 md:space-y-4 -mt-4 md:-mt-24 md:pl-18">
          <h1
            className="font-poppins font-black text-left md:text-left 
             text-[24px] sm:text-[36px] md:text-[95px] 
             leading-[1.2] md:leading-[1.0]"
            style={{
              background:
                "linear-gradient(237deg, #851B67 4.91%, #C81A7A 98.1%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Digital
            <span className="inline-block w-2 md:w-5 h-2 md:h-5 bg-gradient-to-b from-[#851B67] to-[#C81A7A] rounded-full"></span>{" "}
            Design
            <span className="inline-block w-2 md:w-5 h-2 md:h-5 bg-gradient-to-b from-[#851B67] to-[#C81A7A] rounded-full"></span>{" "}
            Tech
            <span className="inline-block w-2 md:w-5 h-2 md:h-5 bg-gradient-to-b from-[#851B67] to-[#C81A7A] rounded-full"></span>
          </h1>

          <p className="text-[#000] text-[16px] md:text-[32px] max-w-[350px] mx-auto md:mx-0 font-normal">
            Expert solutions tailored to your brand
          </p>
          <button
            onClick={() => router.push("/getAQuote")}
            className="relative text-[18px] text-center md:text-[22px] inline-flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer"
          >
            <span className="flex items-center gap-2 transform transition-transform duration-700 translate-x-4 group-hover:-translate-x-3">
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
        <div className="flex-[1.2] md:flex-[1.3] flex justify-center md:justify-end mb-44 md:mb-0 mt-0 md:mt-5">
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
              width={700}
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
