"use client";

import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { ArrowRight, Circle } from "lucide-react";
import Image from "next/image";

function ServicePackages() {
    const [selectedPlan, setSelectedPlan] = useState("Lite");

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

    const plans = [
        { name: "Lite", price: 750 },
        { name: "Essential", price: 1000 },
        { name: "Advanced", price: 1250 },
    ];

    const features = [
        { name: "Content Revision", value: "Upto 2" },
        { name: "Account Manager", value: "Shared" },
        { name: "Monthly Reporting", value: true },
        { name: "Content Size Adaptations", value: 10 },
        { name: "Motion or Carousel Content", value: 2 },
        { name: "Image Based Content", value: 8 },
        { name: "Scheduling and Posting", value: true },
        { name: "Total Content Count", value: 10 },
        { name: "Monthly Content Plan", value: "gray-icon" }, // gray icon
        {
            name: "Story Publication (Photos, Re-Posts, Adaptations)",
            value: "In 2 Day Intervals",
        },
        { name: "Copywriting (Captions, content and more)", value: true },
        { name: "Standing Meetings", value: "Monthly" },
    ];

    return (

        <section style={bgStyle} className="px-1">
            <div className="max-w-7xl mt-5 md:mt-20 mx-auto">
                <h2 className="w-92 md:w-2xl px-2 mx-auto text-center text-[#000] text-[16px] md:text-[24px] font-[400]">Discover the full potential of what we can offer. From digital marketing to tech solutions, <span className="text-[#C91A7B]">Purplebot is your partner for success.</span></h2>
                <h1 className="w-[370px] md:w-full mx-auto px-2 mt-4 md:leading-14 leading-10 text-[#C91A7B] text-[25px] md:text-[48px] font-[700] text-center">Service Packages for <br />
                    <spen className="text-[#000]">Social Media Management</spen> </h1>
            </div>
            <section className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl mt-16 p-2 md:p-10 md:flex justify-between gap-8">
                {/* Left Column (Feature List) */}
                <div className="w-full md:w-[60%] mx-auto bg-[#F8F8F8] p-2 md:p-6 rounded-2xl">
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center pb-2"
                            >
                                <span className="font-[500] text-[#09082E] text-[16px]">{feature.name}</span>
                                <span className="font-semibold text-[15px]">
                                    {feature.value === true ? (
                                        <div className="w-4 h-4 bg-[#8136AE] rounded-full flex items-center justify-center">
                                            <MdDone className="text-white w-3 h-3" />
                                        </div>
                                    ) : feature.value === "gray-icon" ? (
                                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                                            <MdDone className="text-white w-3.5 h-3.5" />
                                        </div>
                                    ) : feature.value === false ? (
                                        <div className="w-3 h-3 border border-gray-400 rounded-full opacity-50" />
                                    ) : (
                                        <span className="text-[#09082E] font-[400]">{feature.value}</span>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column (Pricing Options) */}
                <div className="w-full md:w-[40%] mx-auto flex flex-col space-y-4 mt-8 md:mt-0">
                    {plans.map((plan) => (
                        <label
                            key={plan.name}
                            onClick={() => setSelectedPlan(plan.name)}
                            className={`flex items-center justify-between px-6 py-5 rounded-xl cursor-pointer transition-all border ${selectedPlan === plan.name
                                ? "bg-[#8136AE] text-white border-transparent"
                                : "bg-white border-gray-300 text-[#000000] hover:border-[#8136AE]"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                {selectedPlan === plan.name ? (
                                    <div className="w-4 h-4 -pl-5 md:pl-0 flex items-center justify-center rounded-full bg-white">
                                        <MdDone className="text-[#8136AE] w-3 h-3 " />
                                    </div>
                                ) : (
                                    <Circle className="w-4 h-4 " />
                                )}
                                <span className="text-[20px] font-[400]">{plan.name}</span>
                            </div>
                            <p className="text-[36px] font-[500] pl-2 md:pl-0">
                                ${plan.price}
                                <span className="text-[16px] font-normal">/monthly</span>
                            </p>
                        </label>
                    ))}

                    <button className="flex justify-center items-center gap-2 w-full py-9 rounded-xl bg-[#8E4EB526] text-[#C91A7B] text-[14px] font-[500] transition-all cursor-pointer">
                        See pricing comparison <span><FaUpRightFromSquare size={12} /></span>
                    </button>
                </div>
            </section>
            <div
                className="flex items-center gap-4 p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all bg-cover bg-no-repeat bg-center"
                style={{
                    backgroundImage: "url('/assist/quoteBg..png')",
                }}
            >
                <div className="w-16 h-16 flex-shrink-0">
                    <img
                        src="/assist/Custom.svg"
                        alt="Feature"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div>
                    <h1 className="text-lg md:text-xl font-semibold text-gray-800">
                        Custom Prices.<br />Tailored Solutions.
                    </h1>
                    <p className="text-sm text-gray-600 mb-3">
                        Short description about the plan or feature goes here.
                    </p>
                    <button className="relative text-[18px] text-center md:text-[22px] inline-flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer">
                        <span className="flex items-center gap-2 transform transition-transform duration-700 translate-x-4 group-hover:-translate-x-3">
                            Get a Quote
                            <ArrowRight
                                size={26}
                                strokeWidth={3}
                                className="opacity-0 translate-x-[5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                            />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ServicePackages;
