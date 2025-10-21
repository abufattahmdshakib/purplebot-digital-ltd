"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className=" w-full">
            {/* Container */}
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3 relative">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/assist/logo.webp" alt="Logo" width={170} height={170} />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <a
                        href="#"
                        className="text-black font-poppins text-[16px] font-semibold py-1 px-4 rounded-[6px] hover:bg-gray-100 hover:text-[#8136AE] transition-colors"
                    >
                        Home
                    </a>

                    {/* Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-black font-poppins text-[16px] font-semibold transition-transform">
                            Services
                            <ChevronDown
                                size={18}
                                strokeWidth={3}
                                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#8136AE]" : "rotate-0"
                                    }`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute left-0 top-full bg-gray-50 rounded-lg py-2 w-64 z-10 shadow-lg">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-black font-poppins text-[16px] font-semibold hover:bg-gray-100 hover:text-[#8136AE] transition"
                                >
                                    Digital Marketing
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-black font-poppins text-[16px] font-semibold hover:bg-gray-100 hover:text-[#8136AE] transition"
                                >
                                    Branding & Graphics Design
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-black font-poppins text-[16px] font-semibold hover:bg-gray-100 hover:text-[#8136AE] transition"
                                >
                                    Video Editing & Animation
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-black font-poppins text-[16px] font-semibold hover:bg-gray-100 hover:text-[#8136AE] transition"
                                >
                                    Website & Tech
                                </a>
                            </div>
                        )}
                    </div>

                    <a
                        href="#"
                        className="text-black font-poppins text-[16px] font-semibold py-1 px-4 rounded-[6px] hover:bg-gray-100 hover:text-[#8136AE] transition-colors"
                    >
                        Our Work
                    </a>
                    <a
                        href="#"
                        className="text-black font-poppins text-[16px] font-semibold py-1 px-4 rounded-[6px] hover:bg-gray-100 hover:text-[#8136AE] transition-colors"
                    >
                        Plans & Pricing
                    </a>
                </div>
                <div className="hidden md:block">
                    <button className="relative text-[22px] inline-flex items-center justify-center gap-2 h-14 px-8 rounded-[48px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl">
                        <span className="flex items-center gap-2 transform transition-transform duration-700 group-hover:-translate-x-2">
                            Get A Quote
                            <ArrowRight
                                size={26}
                                strokeWidth={3}
                                className="opacity-0 translate-x-[5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                            />
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <a
                        href="#"
                        className="block px-6 py-3 text-black font-bold"
                    >
                        Home
                    </a>

                    {/* Mobile Dropdown */}
                    <div>
                        <button
                            className="flex justify-between items-center w-full px-6 py-3 text-black font-bold"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Services
                            <ChevronDown
                                size={18}
                                strokeWidth={3}
                                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#8136AE]" : "rotate-0"
                                    }`}
                            />
                        </button>
                        {isDropdownOpen && (
                            <div>
                                <a
                                    href="#"
                                    className="block pl-12 py-2 text-black font-poppins font-bold"
                                >
                                    Digital Marketing
                                </a>
                                <a
                                    href="#"
                                    className="block pl-12 py-2 text-black font-poppins font-bold"
                                >
                                    Branding & Graphics Design
                                </a>
                                <a
                                    href="#"
                                    className="block pl-12 py-2 text-black font-poppins font-bold"
                                >
                                    Video Editing & Animation
                                </a>
                                <a
                                    href="#"
                                    className="block pl-12 py-2 text-black font-poppins font-bold"
                                >
                                    Website & Tech
                                </a>
                            </div>
                        )}
                    </div>

                    <a
                        href="#"
                        className="block px-6 py-3 text-black font-bold"
                    >
                        Our Work
                    </a>
                    <a
                        href="#"
                        className="block px-6 py-3 text-black font-bold"
                    >
                        Plans & Pricing
                    </a>

                    <div className="flex justify-center pt-3 pb-5">
                        <button className=" relative text-[22px] inline-flex items-center justify-center gap-2 h-14 px-8 rounded-[48px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold">
                            Get A Quote
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
