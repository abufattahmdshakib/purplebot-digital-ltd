"use client";
import React from "react";
import Image from "next/image";
import { MdDone } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";

const plans = [
  {
    name: "Lite",
    price: "$750",
    per: "/month",
    image: "/assist/stack1.webp",
    contents: {
      "Content Revision": "Upto 2",
      "Account Manager": "Shared",
      "Monthly Reporting": "🌸",
      "Content Size Adaptations": "10",
      "Motion or Carousel Content": "2",
      "Image Based Content": "8",
      "Scheduling and Posting": "🌸",
      "Total Content Count": "10",
      "Monthly Content Plan": "gray-icon",
      "Story Publication": "In 2 Day Intervals",
      "Copywriting": "🌸",
      "Standing Meetings": "Monthly",
    },
  },
  {
    name: "Essential",
    price: "$1000",
    per: "/month",
    image: "/assist/stack2.webp",
    contents: {
      "Content Revision": "Upto 3",
      "Account Manager": "Shared",
      "Monthly Reporting": "🌸",
      "Content Size Adaptations": "15",
      "Motion or Carousel Content": "3",
      "Image Based Content": "12",
      "Scheduling and Posting": "🌸",
      "Total Content Count": "15",
      "Monthly Content Plan": "🌸",
      "Story Publication": "In 1 Day Intervals",
      "Copywriting": "🌸",
      "Standing Meetings": "Bi-Monthly",
    },
  },
  {
    name: "Advanced",
    price: "$1250",
    per: "/month",
    image: "/assist/stack3.webp",
    contents: {
      "Content Revision": "Upto 4",
      "Account Manager": "Shared",
      "Monthly Reporting": "🌸",
      "Content Size Adaptations": "20",
      "Motion or Carousel Content": "4",
      "Image Based Content": "16",
      "Scheduling and Posting": "🌸",
      "Total Content Count": "20",
      "Monthly Content Plan": "🌸",
      "Story Publication": "Everyday",
      "Copywriting": "🌸",
      "Standing Meetings": "Weekly",
    },
  },
];

const features = [
  "Content Revision",
  "Account Manager",
  "Monthly Reporting",
  "Content Size Adaptations",
  "Motion or Carousel Content",
  "Image Based Content",
  "Scheduling and Posting",
  "Total Content Count",
  "Monthly Content Plan",
  "Story Publication",
  "Copywriting",
  "Standing Meetings",
];

export default function PlansPricingBanner() {
  const rowHeight = "h-18"; // row height
  const headerHeight = "h-40"; // header height

  return (
    <section className="bg-gradient-to-l from-[#ECB9D6] via-[#FFF] to-[#CCAFDD]">
      <div className="leading-18 sm:leading-20 py-10 sm:py-16">
        <h1 className="text-center text-[38px] sm:text-[64px] font-[700] sm:font-[800] px-1 text-transparent bg-clip-text bg-gradient-to-r from-[#C81A7A] to-[#851B67]">
          Fixed Packages
        </h1>
        <h2 className="text-center leading-9 sm:leading-20 text-[28px] sm:text-[64px] font-[500] px-1 text-transparent bg-clip-text bg-gradient-to-r from-[#C81A7A] to-[#851B67]">
          for Social Media Management
        </h2>
      </div>

      <section className="p-2 sm:p-4">
        <div className="max-w-6xl mx-auto">
          {/* Card Wrapper */}
          <div className="bg-white rounded-3xl shadow-xl overflow-x-auto p-4 sm:p-12">
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {/* Feature Column */}
              <div className="flex flex-col border-gray-300">
                <div className={`${headerHeight}`}></div>
                <div className="flex flex-col">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className={`text-center text-xs sm:text-[20px] font-[400] text-black flex justify-center items-center px-1 ${rowHeight} ${i === 0 ? "" : "border-t border-gray-200"}`}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan Columns */}
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className="flex flex-col hover:border-2 hover:rounded-3xl hover:border-[#b17af0] transition-all duration-300"
                >
                  {/* Header */}
                  <div className={`text-center flex flex-col items-center justify-center ${headerHeight}`}>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 sm:w-18 sm:h-18 rounded-full flex items-center justify-center overflow-hidden">
                        <Image
                          src={plan.image}
                          alt={`${plan.name} icon`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>

                      <h3 className="text-sm sm:text-[24px] font-[500] text-black">{plan.name}</h3>
                      <div className="sm:flex">
                        <p className="text-lg sm:text-4xl font-[600] text-black">{plan.price}</p>
                        <p className="text-[10px] flex justify-center items-end sm:text-[24px] font-normal text-[#838383]">{plan.per}</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Rows */}
                  <div className="flex flex-col">
                    {features.map((feature, j) => {
                      const value = plan.contents[feature];
                      return (
                        <div
                          key={j}
                          className={`flex justify-center items-center px-1 sm:px-4 ${rowHeight} ${j === 0 ? "" : "border-t border-gray-200"}`}
                        >
                          {value === "gray-icon" ? (
                            <div className=" w-4 h-4 sm:w-5 sm:h-5 bg-gray-400 rounded-full flex items-center justify-center">
                              <MdDone className="text-white w-3 h-3 sm:w-5 sm:h-5" />
                            </div>
                          ) : value === "🌸" ? (
                            <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center">
                              <HiBadgeCheck className="text-[#c81a7a] w-5 h-5 sm:w-7 sm:h-7" />
                            </div>
                          ) : (
                            <span className="text-xs sm:text-[20px] font-[600] text-black">{value}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
