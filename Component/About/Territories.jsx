"use client";
import React from "react";
import Image from "next/image";

const Territories = () => {
  return (
    <section className="relative ">
      {/* FLOATING SMALL IMAGES */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Cloud */}
        <Image
          src="/assist/cloud-1 (2).webp"
          alt="Cloud Left"
          width={250}
          height={150}
          className="absolute max-w-[200px] sm:max-w-[300px] floating-rotate top-[-70px] sm:top-[-100px] left-[20px] sm:left-[380px] z-80"
        />
        {/* Right Cloud (foreground) */}
        <Image
          src="/assist/cloud-1.webp"
          alt="Cloud Right"
          width={300}
          height={250}
          className="absolute max-w-[220px] sm:max-w-[300px] floating-rotate top-[-140px] sm:top-[-120px] right-[20px] sm:right-[10px] z-[50]"
        />
        {/* Bottom Leaf */}
        <Image
          src="/assist/leaf-img.webp"
          alt="Leaf"
          width={300}
          height={300}
          className="absolute max-w-[200px] sm:max-w-[300px] floating-rotate bottom-54 sm:bottom-[50px] right-[-40px] sm:right-[-70px] z-80"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-5xl max-h-[85vh] mx-auto flex justify-center sm:justify-end items-center z-0 px-2 sm:px-0">
        {/* RIGHT TEXT SECTION */}
        <div className="relative shape-wrapper-reverse flex-1 text-center sm:text-left -mr-0 sm:-mr-24 -pr-0 sm:-pr-26">
          {/* Background shape */}
          <div className="absolute inset-0 z-0 pointer-events-none shape-reverse"></div>

          <div className="absolute max-w-full sm:max-w-xl mx-auto p-1 sm:p-0 right-0 sm:right-[2px] left-0 sm:left-96 top-[80px] sm:top-24  2xl:top-[600px] z-10">
            <h2 className="text-[22px] sm:text-[32px] font-[700] mb-2 text-black">
              Amidst our Local Success, We’re Exploring
            </h2>

            <h1 className="text-[28px] sm:text-[52px] font-[800] leading-tight mb-4 bg-gradient-to-r from-[#851B67] to-[#C91A7B] bg-clip-text text-transparent">
              New Territories
            </h1>

            <p className="text-[16px] sm:text-[24px] font-[500] text-black leading-relaxed">
              We offer <strong>high-value content</strong> at a <strong>competitive price</strong>, making us the ideal partner
              for brands looking to <strong>maximize their impact without breaking the bank.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* LEFT IMAGE */}
      <div className="flex-1 -mt-[230px] sm:-mt-[500px] flex justify-center sm:justify-start">
        <Image
          src="/assist/binocular.webp"
          alt="Exploration Hero"
          width={650}
          height={650}
          className="object-contain max-w-[400px] sm:max-w-[700px] -mb-14 pb-12 sm:pb-0 z-100"
        />
      </div>
    </section>

  );
};

export default Territories;