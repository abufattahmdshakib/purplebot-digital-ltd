"use client";
import React from "react";
import Image from "next/image";

const UiUxDesign = () => {
    const features = [
        "Wireframing and Prototyping",
        "Interface Design",
        "Mobile / Device Optimization",
        "Onging ux Optimization",
        "User Research and Analysis",
    ];

    const digitalCards = [
        { src: "/assist/wireframing.ui-ux.svg", text: features[0] },
        { src: "/assist/interface.ui-ux.svg", text: features[1] },
        { src: "/assist/optimization.ui-ux.svg", text: features[2] },
        { src: "/assist/ongoing.ui-ux.svg", text: features[3] },
        { src: "/assist/research.ui-ux.svg", text: features[4] },
    ];

    return (
        <section className="px-2 sm:px-6 mt-0 relative py-8 z-10 overflow-hidden">
            {/* Shape Wrapper */}
            <div className="shape-wrapper-services relative flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-2">

                {/* Background Shape */}
                <div className="shape-services absolute inset-0 z-0 pointer-events-none"></div>

                {/* LEFT SIDE */}
                <div className="w-full -mt-18 sm:-mt-22 px-3 sm:px-8 pl-0 sm:pl-10 text-left text-black relative z-20">
                    <div className="mb-6 pl-1">
                        <h4 className="text-[28px] sm:text-[34px] font-[800] bg-gradient-to-r from-[#c71a7a] to-[#851b67] bg-clip-text text-transparent">
                            UI/UX Design
                        </h4>
                    </div>
                    <div className="space-y-8 px-2 sm:px-0">
                        <p className="font-[400] text-[16px] sm:text-[20px]  text-black mb-4">
                            Our expert designers and usability specialists work collaboratively to understand your user's needs and translate them into beautiful and functional designs
                        </p>

                        <p className="text-[16px] sm:text-[20px] font-[400] text-black mb-6">
                            We design digital experiences that are visually stunning but also intuitive and user-friendly. Our UI/UX design services focus on creating seamless interactions and engaging interfaces that delight users and drive results.
                        </p>

                        <p className="text-[16px] sm:text-[20px] font-[600] text-black mb-6">
                            Services we offer under UI/UX Design:                        </p>
                    </div>

                </div>

                {/* RIGHT SIDE IMAGES */}
                <div className="relative w-full sm:w-2/5 flex justify-center items-center -mt-12 sm:mt-6 md:mt-0 z-10 overflow-visible">
                    <div className="relative z-20 flex justify-center left-[-18px] sm:left-[-28px] w-full mx-auto pointer-events-none">
                        <Image
                            src="/assist/ui-ux.webp"
                            alt="Main Character"
                            width={600}
                            height={600}
                            className="object-contain mx-auto max-w-[370px] sm:max-w-[600px]"
                        />
                    </div>
                </div>
            </div>
            {/* FEATURES AS ICON CARDS */}
            <div className="w-[500px] sm:w-[720px] mx-auto sm:mx-0 sm:pl-6 mt-4 sm:-mt-38">
                {digitalCards.map((card, i) => (
                    <div
                        key={i}
                        className="inline-flex m-2"
                    >
                        <div
                            className=" flex sm:w-full w-40 justify-between  mx-auto items-center gap-2 sm:gap-4 bg-white px-2 py-1 sm:px-4 h-22 sm:h-18 rounded-full shadow-sm border border-[#e8d4f1]"
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
        </section >
    );
};

export default UiUxDesign;