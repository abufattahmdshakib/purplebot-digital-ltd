"use client";
import React from "react";
import Image from "next/image";

const Website = () => {
    const features = [
        { src: "/assist/wordPress.website.svg", text: "WordPress Website" },
        { src: "/assist/custom.website.svg", text: "Custom-coded Website" },
        { src: "/assist/portfolio.website.svg", text: "Corporate/Portfolio Website" },
        { src: "/assist/e-commerce.website.svg", text: "E-Commerce Website" },
        { src: "/assist/maintenance.website.svg", text: "Ongoing Maintenance and Support" },
        { src: "/assist/domain.website.svg", text: "Domain & Hosting Solutions" },
    ];

    return (
        <section className="px-2 mt-0  relative py-8 z-10 overflow-hidden">
            {/* Shape Wrapper */}
            <div className="shape-wrapper-services-reverse left-0 sm:left-70 relative flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Background Shape */}
                <div className="shape-services-reverse absolute inset-0 z-0 pointer-events-none"></div>
                {/* LEFT SIDE IMAGE */}
                <div className="relative w-full sm:w-2/5 flex justify-center items-end -mt-8 sm:mt-6 z-10 overflow-visible">
                    <div className="relative z-20 flex justify-center right-[-8px] sm:right-38 w-full mx-auto pointer-events-none">
                        <Image
                            src="/assist/website.webp"
                            alt="Digital Ads Illustration"
                            width={700}
                            height={700}
                            className="object-contain mx-auto max-w-[450px] sm:max-w-[600px]"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE TEXT */}
                <div className="w-full sm:-mt-16 -mt-12 mb-2 sm:mb-6 sm:w-[65%] px-2 sm:px-0 relative sm:left-[-44px] z-20">
                    <div className="mb-6 -mt-12 sm:mt-0 text-center sm:text-right pr-0 sm:pr-4">
                        <h4 className="text-[28px] sm:text-[34px] font-[800] bg-gradient-to-r from-[#c71a7a] to-[#851b67] bg-clip-text text-transparent">
                            Website Development
                        </h4>
                    </div>

                    <div className="space-y-8 text-center sm:text-left px-2 sm:px-0 pr-0 sm:pr-4">
                        <p className="font-[400] text-[16px] sm:text-[20px] text-black mb-4">
                            Our website development services ensure your online presence is visually stunning, highly functional, and user-friendly.
                        </p>
                        <p className="text-[16px] sm:text-[20px] font-[400] text-black mb-3">
                            From sleek portfolio sites to dynamic e-commerce platforms, we bring your digital vision to life with cutting-edge technology, creative design, and fast loading speed. Services we offer under Digital Ads & Lead Generation.
                        </p>
                        <p className="text-[16px] sm:text-[20px] font-[600] text-black mb-3">
                            Services we offer under Website Development:
                        </p>
                    </div>
                </div>
            </div>

            {/* FEATURE CARDS (RIGHT SIDE) */}
            <div className="w-full sm:w-3/5 sm:ml-auto mt-0 sm:-mt-38 sm:pr-20 grid grid-cols-2 sm:flex sm:flex-wrap justify-center sm:justify-end gap-2">
                {features.map((card, i) => (
                    <div key={i} className="m-2 flex justify-center">
                        <div className="flex justify-between items-center gap-4 bg-white px-3 py-1 sm:px-4 h-20 sm:h-16 rounded-full shadow-sm border border-[#e8d4f1]">
                            {/* ICON */}
                            <div className="sm:w-8 w-7 h-7 sm:h-8 relative flex-shrink-0">
                                <Image
                                    src={card.src}
                                    alt={card.text}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* TEXT */}
                            <p className="text-[#8136ae] text-[12px] sm:text-[16px] font-[600] max-w-[160px] sm:max-w-[220px]">
                                {card.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Website;
