"use client";
import React from "react";
import Image from "next/image";

const Territories = () => {
  return (
    <section className="relative -mt-18 mb-24 py-46">
      {/* FLOATING SMALL IMAGES */}
      <div className="absolute inset-0 pointer-events-none z-40">
        <Image
          src="/assist/cloud-1 (2).webp"
          alt="Cloud Left"
          width={250}
          height={200}
          className="absolute top-[-48px] left-8 sm:left-90 rotate-[-10deg] opacity-90"
        />
        <Image
          src="/assist/cloud-1.webp"
          alt="Cloud Right"
          width={200}
          height={200}
          className="absolute top-8 right-6 sm:right-24 rotate-[-10deg] opacity-90"
        />
        {/* ✅ Bottom-right leaf image */}
        <Image
          src="/assist/leaf-img.webp"
          alt="Leaf"
          width={300}
          height={300}
          className="absolute bottom-[-88px] right-[-34] rotate-[-10deg] opacity-90"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative container mx-auto flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-16 z-20">
        {/* LEFT SIDE IMAGE */}
        <div className="flex-1 flex justify-center sm:justify-start">
          <Image
            src="/assist/binocular.webp"
            alt="Exploration Hero"
            width={700}
            height={700}
            className="object-contain max-w-7xl -mb-88"
          />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="flex-1 text-black">
          <h2 className="text-[26px] sm:text-[34px] font-[400] mb-2">
            Amidst our Local Success, <br /> We’re Exploring
          </h2>

          <h1 className="text-[32px] sm:text-[52px] font-bold leading-tight mb-4 bg-gradient-to-r from-[#c71a7a] to-[#9e1b6e] bg-clip-text text-transparent">
            New Territories
          </h1>

          <h2 className="text-[18px] md:text-[22px] font-[500]">
            We offer high-value content at a competitive price,
            making us the ideal partner for brands looking to maximize
            their impact without breaking the bank.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Territories;
