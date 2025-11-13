"use client";
import React from "react";
import Image from "next/image";

const DigitalAds = () => {
    const features = [
        { src: "/assist/meta.digital-ads.svg", text: "Meta Advertisement (Facebook & Instagram)" },
        { src: "/assist/google.digital-ads.svg", text: "Google & YouTube Ads" },
        { src: "/assist/tiktok.digital-ads.svg", text: "Tiktok for Business" },
        { src: "/assist/linkedin.digital-ads.svg", text: "Linkedin Ads" },
    ];

    return (
        <section className="px-2  mt-0 relative py-8 z-10 overflow-hidden">
            {/* Shape Wrapper */}
            <div className="shape-wrapper-services-reverse left-0 sm:left-70 relative flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Background Shape */}
                <div className="shape-services-reverse absolute inset-0 z-0 pointer-events-none"></div>
                {/* LEFT SIDE IMAGE */}
                <div className="relative w-full sm:w-2/5 flex justify-center items-end mt-8 sm:mt-16 z-10 overflow-visible">
                    <div className="relative z-20 flex justify-center right-0 sm:right-46 w-full mx-auto pointer-events-none">
                        <Image
                            src="/assist/digital-ads.webp"
                            alt="Digital Ads Illustration"
                            width={700}
                            height={700}
                            className="object-contain mx-auto max-w-[450px] sm:max-w-[600px]"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE TEXT */}
                <div className="w-full mb-2 sm:mb-0 sm:w-[65%] px-2 sm:px-0 relative sm:left-[-44px] z-20">
                    <div className="mb-6 -mt-12 sm:mt-0 text-center sm:text-right pr-0 sm:pr-4">
                        <h4 className="text-[28px] sm:text-[34px] font-[800] bg-gradient-to-r from-[#c71a7a] to-[#851b67] bg-clip-text text-transparent">
                            Digital Ads and <br /> Lead Generation
                        </h4>
                        <h4 className="text-[17px] font-[400]">
                            (Monthly Subscription)
                        </h4>
                    </div>

                    <div className="space-y-8 text-center sm:text-left px-2 sm:px-0 pr-0 sm:pr-4">
                        <p className="font-[400] text-[16px] sm:text-[20px] text-black mb-4">
                            Organic reach is great, but paid reach can take your brand to new heights.
                        </p>

                        <p className="text-[16px] sm:text-[20px] font-[400] text-black mb-3">
                            We have certified <strong>Media Buying specialists</strong> here to help you create winning ads and optimize your ad spending. From <strong>Meta, Google, LinkedIn</strong> to <strong>TikTok</strong>, we know how to get the best results out of any digital platform.
                        </p>

                        <p className="text-[16px] sm:text-[20px] font-[400] text-black mb-3">
                            Our team will guide you through setting up and managing ad accounts to effectively monitor and track results, helping you <strong>keep customer acquisition costs low and returns on ad spends high!</strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* FEATURE CARDS (RIGHT SIDE) */}
            <div className="w-full sm:w-3/5 sm:ml-auto mt-0 sm:-mt-20 sm:pr-20 grid grid-cols-2 sm:flex sm:flex-wrap justify-center sm:justify-end gap-2">
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

export default DigitalAds;
