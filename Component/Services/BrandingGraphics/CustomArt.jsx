"use client";
import React from "react";
import Image from "next/image";

const CustomArt = () => {
    const features = [
        "Custom illustrations",
        "Custom Murals",
        "Hand-Drawn Graphic Art",
        "Personalised Artwork for Marketing Compaigns",
        "Visual Elements for web and Print",
    ];

    const digitalCards = [
        { src: "/assist/illustrations.custom-art.svg", text: features[0] },
        { src: "/assist/murals.custom-art.svg", text: features[1] },
        { src: "/assist/hand-drawn.custom-art.svg", text: features[2] },
        { src: "/assist/personalised.custom-art.svg", text: features[3] },
        { src: "/assist/visual.custom-art.svg", text: features[4] },
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
                            Custom Art
                        </h4>
                        {/* <h4 className="text-[28px] sm:text-[34px] font-[600] bg-gradient-to-r from-[#c71a7a] to-[#851b67] bg-clip-text text-transparent">(Monthly Subscription)
                    </h4> */}
                    </div>
                    <div className="space-y-8 px-2 sm:px-0">
                        <p className="font-[400] text-[16px] sm:text-[20px]  text-black mb-4">
                            We have a cool, creative team of artists, visualizers and creators, to help you create bespoke artworks for your brand.
                        </p>

                        <p className="text-[16px] sm:text-[20px] font-[400] text-black mb-6">
                            From the walls of your office space, to cup holders and burger wrappers, each and every space can be turned into real estate, for the creative expressions of your brand.
                        </p>
                        <p className="text-[16px] sm:text-[20px] font-[400] text-black mb-6">
                            From initial sketches to the final masterpiece, we ensure that every custom art piece reflects your brand’s personality and values.
                        </p>

                        <p className="text-[16px] sm:text-[20px] font-[600] text-black mb-6">
                            Services we offer under Custom Art:
                        </p>
                    </div>

                </div>

                {/* RIGHT SIDE IMAGES */}
                <div className="relative w-full sm:w-2/5 flex justify-center items-center -mt-12 sm:mt-6 md:mt-0 z-10 overflow-visible">
                    <div className="relative z-20 flex justify-center left-[-28px] sm:left-[-28px] w-full mx-auto pointer-events-none">
                        <Image
                            src="/assist/custom-art.webp"
                            alt="Main Character"
                            width={900}
                            height={900}
                            className="object-contain mx-auto max-w-[400px] sm:max-w-[700px]"
                        />
                    </div>
                </div>
            </div>
            {/* FEATURES AS ICON CARDS */}
            <div className="w-[500px] sm:w-[920px] mx-auto sm:mx-0 sm:pl-6 mt-4 sm:-mt-38">
                {digitalCards.map((card, i) => (
                    <div
                        key={i}
                        className="inline-flex m-2"
                    >
                        <div
                            className=" flex sm:w-full w-40 justify-between  mx-auto items-center gap-2 sm:gap-4 bg-white px-2 py-2 sm:px-4 h-22 sm:h-18 rounded-full shadow-sm border border-[#e8d4f1]"
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

export default CustomArt;
