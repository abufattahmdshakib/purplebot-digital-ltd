"use client";

import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'


//  Define your data as a constant
const chooseData = [
    {
        id: 1,
        title: "Dynamic",
        description: "Much like social media trends and algorithms, we are drilled to be dynamic. With us, you will never fall short of ideas",
        image: "/assist/Choose.svg"
    },
    {
        id: 2,
        title: "Experienced",
        description: "8+ years of experience. 20,000+ creatives delivered for 100+ clients across multiple industries.",
        image: "/assist/Choose (2).svg"
    },
    {
        id: 3,
        title: "Agile",
        description: "Optimized operations procedures, supported by our highly skilled designers, allow us to deliver with least friction.",
        image: "/assist/Choose (3).svg"
    }
]

function WhyChoose() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className='bg-gradient-to-t from-[#851B67] to-[#C81A7A] py-10 md:py-20'>
            {/* section one */}
            <section className="flex flex-col md:flex-row items-center mb-5">
                {/* Left Content */}
                <div className="w-full md:w-3/5 mx-auto  pl-0 md:pl-22 mb-6 md:mb-0">
                    <div className="flex-1 text-center md:text-left">
                        {/* Title */}
                        <h1 className="text-[28px] md:text-[48px] font-[700] text-[#FFFFFF]">
                            Why Choose <span className=" md:hidden inline">Purplebot?</span>
                        </h1>
                        <h1 className="hidden md:block text-[28px] md:text-[48px] font-[700] bg-gradient-to-l from-[#F3DEEE] via-[#FBD9D7] to-[#B6C9F1] bg-clip-text text-transparent mt-[1px] md:-my-4">
                            Purplebot?
                        </h1>

                        {/* Description */}
                        <p className="md:mt-4 text-[#FFFFFF] text-[16px] md:text-[24px] my-2">
                            Discover the perks of going Purple
                        </p>

                        {/* Button */}
                        <button className="relative text-[18px] md:text-[22px] inline-flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer md:mt-6">
                            <span className="flex items-center gap-2 transform transition-transform duration-700 translate-x-4 group-hover:-translate-x-3">
                                Learn More
                                <ArrowRight
                                    size={26}
                                    strokeWidth={3}
                                    className="opacity-0 translate-x-[5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                                />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-4/5 flex justify-center items-center">
                    <Image
                        src="/assist/choose-img.webp"
                        alt="Banner Illustration"
                        width={600}
                        height={600}
                        priority
                        className='ml-0 md:-ml-56 px-2'
                    />
                </div>
            </section>

            {/* section two */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-0 px-3 md:px-8">
                {chooseData.map((item, index) => (
                    <div
                        key={item.id}
                        onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                        className={`
    group flex flex-col items-center text-center transition-all duration-500 ease-in-out transform
    ${index === 1 ? "border-t border-b md:border-t-0 md:border-b-0 md:border-l md:border-r border-gray-400 py-8 md:py-0 px-0 md:px-8" : ""}
    ${activeIndex === index ? "scale-100 pb-8 translate-y-3" : ""}
    md:hover:scale-[1.00] md:hover:pb-6
  `}
                    >
                        {/* Image + Title */}
                        <div className={`
    flex w-full justify-start items-center gap-1 transition-all duration-500 ease-in-out
    ${activeIndex === index ? "translate-x-4" : ""}
    md:group-hover:translate-x-2
  `}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={100}
                                className={`
    self-start w-12 md:w-20 transition-transform duration-500 ease-in-out
    ${activeIndex === index ? "scale-160 w-24 translate-x-4 translate-y-3 pb-4 " : "scale-80 w-10 -translate-x-2 -translate-y-3 -pr-4"}
    md:group-hover:scale-110
  `}
                            />
                            <h2 className={`
      text-[28px] font-[800] mb-2 bg-gradient-to-l from-[#F3DEEE] via-[#FBD9D7] to-[#B6C9F1] bg-clip-text text-transparent self-end
      transition-all duration-500 ease-in-out
      ${activeIndex === index ? "translate-x-10 translate-y-10" : "-translate-x-4 -translate-y-2 pl-2"}
      md:group-hover:translate-x-2 md:group-hover:translate-y-3
    `}>
                                {item.title}
                            </h2>
                        </div>

                        {/* Description */}
                        <p className={`
    text-[#FFFFFF] text-left font-[400] mt-4 md:mt-4 transition-all duration-500 ease-in-out
    ${activeIndex === index ? "-translate-x-2 translate-y-6 pl-2 pb-2" : "-translate-y-4"}
    md:group-hover:translate-y-3
  `}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default WhyChoose
