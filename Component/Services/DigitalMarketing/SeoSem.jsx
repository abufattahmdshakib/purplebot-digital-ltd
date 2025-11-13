"use client";
import React from "react";
import Image from "next/image";

const SeoSem = () => {
    const features = [
        "Comprehensive Keyword Strategies",
        "Increased Brand Visibility",
        "Enhanced local search visibility",
        "Customized Campaign Execution",
        "Data-Driven Optimization",
        "Improving visibility & organic traffic",
        "Transparent Reporting",
    ];

    const digitalCards = [
        { src: "/assist/comprehensive.seo-sem.svg", text: features[0] },
        { src: "/assist/increased.seo-sem.svg", text: features[1] },
        { src: "/assist/enhanced.seo-sem.svg", text: features[2] },
        { src: "/assist/customized.seo-sem.svg", text: features[3] },
        { src: "/assist/optimization.seo-sem.svg", text: features[4] },
        { src: "/assist/Digital (6).svg", text: features[5] },
        { src: "/assist/transparent.seo-sem.svg", text: features[6] },
    ];

    return (
        <section className="px-2 sm:px-6 mt-0 relative py-8 z-10 overflow-hidden">
            {/* Shape Wrapper */}
            <div className="shape-wrapper-seosem relative flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-2">

                {/* Background Shape */}
                <div className="shape-seosem absolute inset-0 z-0 pointer-events-none"></div>

                {/* LEFT SIDE */}
                <div className="w-full -mt-50 sm:-mt-22 px-3 sm:px-8 pl-0 sm:pl-10 text-left text-black relative z-20">
                    <div className="mb-6 pl-1">
                        <h4 className="text-[28px] sm:text-[34px] font-[600] bg-gradient-to-r from-[#c71a7a] to-[#851b67] bg-clip-text text-transparent">
                            Search Engine Optimization & Search Engine Marketing
                        </h4>
                        <h4 className="text-[28px] sm:text-[38px] font-[800] bg-gradient-to-r from-[#c71a7a] to-[#851b67] bg-clip-text text-transparent">(SEO & SEM)
                        </h4>
                    </div>
                    <div className="space-y-8 px-2 sm:px-0">
                        <p className="font-[500] text-[16px] sm:text-[20px]  text-black mb-4">
                            Our SEO and SEM solutions will help you stand out in search engines and build credibility with organic search.
                        </p>

                        <p className="text-[16px] sm:text-[20px] font-[500] text-black mb-3">
                            We can help you in creating effective search engine friendly content and optimizing your site, thereby driving <strong>quality traffic to your site.</strong>
                        </p>

                        <p className="text-[16px] sm:text-[20px] font-[700] text-black mb-6">
                            With Purplebot Digital, you can expect:
                        </p>
                    </div>

                </div>

                {/* RIGHT SIDE IMAGES */}
                <div className="relative w-full sm:w-3/5 flex justify-center items-center mt-0 sm:mt-6 z-10 overflow-visible">
                    <div className="relative z-20 flex justify-center left-[-44px] sm:left-[-60px] top-[-80px] sm:top-[-40px] w-full mx-auto pointer-events-none">
                        <Image
                            src="/assist/seo-sem.webp"
                            alt="Main Character"
                            width={600}
                            height={600}
                            className="object-contain mx-auto max-w-[450px] sm:max-w-[700px] px-1"
                        />
                    </div>
                </div>
            </div>
            {/* FEATURES AS ICON CARDS */}
            <div className="w-[500px] sm:w-[970px] mx-auto sm:mx-0 sm:pl-6 mt-4 sm:-mt-50">
                {digitalCards.map((card, i) => (
                    <div
                        key={i}
                        className="inline-flex m-2"
                    >
                        <div
                            className=" flex sm:w-full w-40 justify-between  mx-auto items-center gap-4 bg-white px-3 py-1 sm:px-4 h-20 sm:h-16 rounded-full shadow-sm border border-[#e8d4f1]"
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

export default SeoSem;
