"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const weOfferData = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "Drive your brand forward with holistic digital marketing solutions aimed to drive results.",
    image: "/assist/digital-marketing 1.svg",
  },
  {
    id: 2,
    title: "Video Editing & Animation",
    description:
      "Engage your audience with captivating animated video content.",
    image: "/assist/digital-marketing 2.svg",
  },
  {
    id: 3,
    title: "Branding & Graphics Design",
    description:
      "Elevate your brand with our bespoke graphic design solutions.",
    image: "/assist/digital-marketing 3.svg",
  },
  {
    id: 4,
    title: "Website & Tech",
    description:
      "Empower your business with our cutting-edge tech solutions.",
    image: "/assist/digital-marketing 4.svg",
  },
];

function WeOffer() {  // ✅ function name fixed
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
    <section className="py-12 md:py-2 px-2 md:px-10"
      style={bgStyle}
    >

      {/* Section Title */}
      <div className="text-center mb-5 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#C81A7A] mt-0 md:mt-18 mb-2 md:mb-8">
          Services We Offer
        </h1>
        <p className="text-[#000000] text-[14px] md:text-[28px] font-[400] max-w-[1450px] mx-auto px-2">
          Explore the full spectrum of services we offer. At Purplebot, we
          combine our marketing, design and tech prowess to deliver tailored
          solutions that fit your brand.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8  service-cards mt-2 md:mt-16 py-4">
        {weOfferData.map((item) => (
          <div
            key={item.id}
            className="card relative overflow-hidden flex flex-row items-center md:items-center gap-8 px-2 py-6 rounded-[12px] border border-[#b6c9f1]/70 bg-[hsla(0,0%,100%,0.25)] shadow-[0_14px_24px_0_rgba(90,46,184,0.15)] backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group"
          >
            {/* Left: Image */}
            <div className="flex-shrink-0  flex justify-center md:justify-start">
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={150}
                className="w-20 md:w-28 mx-auto transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
              />
            </div>

            {/* Right: Text */}
            <div className="flex-1 flex flex-col py-0 md:py-4  justify-start relative text-left">
              {/* Title */}
              <h2
                className="title text-[20px] text-left sticky z-10 py-0 md:py-2 mb-0 md:-mb-18 md:text-[32px] leading-[26px] md:leading-[32px] font-poppins font-bold transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  background:
                    "linear-gradient(57deg, #101339 12.35%, #311d90 67.53%, #b865d8 115.46%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </h2>

              {/* Description */}
              <p className="description text-left text-[12px] md:text-[16px] mt-2 md:mt-10 sticky z-0 text-black md:text-white opacity-100 md:opacity-0 translate-y-0 md:translate-y-3 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] max-w-[350px]">
                {item.description}
              </p>
            </div>

            {/* Hover Animation Style */}
            <style jsx>{`
              @media (min-width: 768px) {
                .group {
                  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .group:hover {
                  background: linear-gradient(
                    57deg,
                    #353535 0%,
                    #37174a 25%,
                    #2967b0 75%,
                    #8136ae 100%
                  );
                  box-shadow: 0 18px 28px rgba(129, 54, 174, 0.25);
                  border-color: rgba(182, 201, 241, 0.6);
                  padding-bottom: 12px;
                }
                .group:hover h2 {
                  -webkit-text-fill-color: #ffffff !important;
                  background: none !important;
                  transform: translateY(-30px); 
                }
                .group:hover .description {
                  opacity: 1;
                  transform: translateY(0);
                  transition-delay: 0.15s;
                }
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeOffer;
