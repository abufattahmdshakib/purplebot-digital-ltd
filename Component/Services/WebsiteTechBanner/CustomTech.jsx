"use client";
import React from "react";
import Image from "next/image";

const CustomTech = () => {
    const features = [
        "E-commerce, Inventory Management System",
        "Customer Relationship Management(CRM) System",
        "Tech Resource / Personnel Deployment",
        "Resaurant, Order Delivery Management System",
        "Operation, HR Management System",
        "Customized ERP",
    ];

    const digitalCards = [
        { src: "/assist/e-commerce.tech.svg", text: features[0] },
        { src: "/assist/customer.tech.svg", text: features[1] },
        { src: "/assist/resource.tech.svg", text: features[2] },
        { src: "/assist/management.tech.svg", text: features[3] },
        { src: "/assist/operation.tech.svg", text: features[4] },
        { src: "/assist/customized.tech.svg", text: features[5] },
    ];

    return (
        <section className="px-2 sm:px-6 mt-0 relative py-8 z-10 overflow-hidden">
            {/* Shape Wrapper */}
            <div className="shape-wrapper-services relative flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-2">

                {/* Background Shape */}
                <div className="shape-services absolute inset-0 z-0 pointer-events-none"></div>

                {/* LEFT SIDE */}
                <div className="w-full -mt-40 sm:-mt-42 px-3 sm:px-8 pl-0 sm:pl-10 text-left text-black relative z-20">
                    <div className="mb-6 pl-1">
                        <h4 className="text-[28px] sm:text-[34px] font-[800] bg-gradient-to-r from-[#c71a7a] to-[#851b67] bg-clip-text text-transparent">
                            Custom Tech Solution
                        </h4>
                    </div>
                    <div className="space-y-8 px-2 sm:px-0">
                        <p className="font-[400] text-[16px] sm:text-[20px]  text-black mb-4">
                            We specialize in developing innovative and intuitive Technology Solutions tailored to meet the unique challenges and goals of your business
                        </p>

                        <p className="text-[16px] sm:text-[20px] font-[400] text-black mb-6">
                            Our Tech solutions are designed to create innovative solutions that <strong>streamline operations, enhance user experiences</strong> using Our team of experienced developers and tech strategists Services we offer under App Development:
                        </p>

                        <p className="text-[16px] sm:text-[20px] font-[600] text-black mb-6">
                            Services we offer under Custom Tech Solutions:
                        </p>
                    </div>

                </div>

                {/* RIGHT SIDE IMAGES */}
                <div className="relative w-full sm:w-2/5 flex justify-center items-center -mt-12 sm:mt-6 md:mt-0 z-10 overflow-visible">
                    <div className="relative z-20 flex justify-center left-[-36px] sm:left-[-68px] w-full mx-auto pointer-events-none">
                        <Image
                            src="/assist/custom-tech.webp"
                            alt="Main Character"
                            width={700}
                            height={700}
                            className="object-contain mx-auto max-w-[400px] sm:max-w-[600px]"
                        />
                    </div>
                </div>
            </div>
            {/* FEATURES AS ICON CARDS */}
            <div className="w-[500px] sm:w-[720px] mx-auto sm:mx-0 pl-[-6px] sm:pl-6 mt-4 sm:-mt-58">
                {digitalCards.map((card, i) => (
                    <div
                        key={i}
                        className="inline-flex m-2"
                    >
                        <div
                            className=" flex sm:w-full w-40 justify-between  mx-auto items-center gap-1 sm:gap-4 bg-white px-2 py-1 sm:px-4 h-22 sm:h-18 rounded-full shadow-sm border border-[#e8d4f1]"
                        >
                            {/* ICON */}
                            <div className="sm:w-8 w-7 h-7 sm:h-8 mx-auto relative flex-shrink-0">
                                <Image
                                    src={card.src}
                                    alt={card.text}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* TEXT */}
                            <p className="text-[#8136ae] text-[12px] sm:text-[16px] font-[600] max-w-[150px] sm:max-w-[220px]">{card.text}</p>
                        </div>
                    </div>

                ))}
            </div>
            <div className="text-center mt-12 sm:mt-24">
                <h1 className="text-[28px] sm:text-[38px] text-black font-[400]">
                    Check out some of our work related to
                </h1>
                <h1 className="text-[36px] sm:text-[48px] font-[900] text-transparent bg-clip-text bg-gradient-to-l from-[#851b67] to-[#c81a7a]">
                    Website and Tech
                </h1>
            </div>
        </section >
    );
};

export default CustomTech; 