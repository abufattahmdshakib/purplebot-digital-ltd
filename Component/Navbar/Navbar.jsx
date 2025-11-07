"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to close mobile menu when any link is clicked
    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <nav className="w-full fixed top-0 left-0 z-50 h-20 md:h-20 bg-white/10 backdrop-blur-md">
            {/* Container */}
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 pb-3 relative">
                {/* Left: Logo (Clickable → Home) */}
                <div className="flex items-center -ml-4 gap-2">
                    <Link href="/" onClick={handleMobileLinkClick}>
                        <Image
                            src="/assist/logo.webp"
                            alt="Logo"
                            width={170}
                            height={170}
                            className="cursor-pointer"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-16">
                    <Link
                        href="/about"
                        className="text-black font-poppins md:text-[18px] font-semibold py-1 px-4 rounded-[6px] hover:bg-gray-100 hover:text-[#8136AE] transition-colors"
                    >
                        About
                    </Link>

                    {/* Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="flex items-center cursor-pointer gap-1 text-black font-poppins md:text-[18px] font-semibold transition-transform">
                            Services
                            <ChevronDown
                                size={18}
                                strokeWidth={3}
                                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#8136AE]" : "rotate-0"}`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute left-0 top-full bg-gray-50 rounded-lg py-2 w-80 z-10 shadow-lg">
                                <Link
                                    href="/services/digital-marketing"
                                    className="block px-4 py-2 text-black font-poppins md:text-[18px] font-semibold hover:bg-gray-100 hover:text-[#8136AE] transition"
                                >
                                    Digital Marketing
                                </Link>
                                <Link
                                    href="/services/branding"
                                    className="block px-4 py-2 text-black font-poppins md:text-[18px] font-semibold hover:bg-gray-100 hover:text-[#8136AE] transition"
                                >
                                    Branding & Graphics Design
                                </Link>
                                <Link
                                    href="/services/video-editing"
                                    className="block px-4 py-2 text-black font-poppins md:text-[18px] font-semibold hover:bg-gray-100 hover:text-[#8136AE] transition"
                                >
                                    Video Editing & Animation
                                </Link>
                                <Link
                                    href="/services/web-tech"
                                    className="block px-4 py-2 text-black font-poppins md:text-[18px] font-semibold hover:bg-gray-100 hover:text-[#8136AE] transition"
                                >
                                    Website & Tech
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/our-work"
                        className="text-black font-poppins md:text-[18px] font-semibold py-1 px-4 rounded-[6px] hover:bg-gray-100 hover:text-[#8136AE] transition-colors"
                    >
                        Our Work
                    </Link>
                    <Link
                        href="/plansPricing"
                        className="text-black font-poppins md:text-[18px] font-semibold py-1 px-4 rounded-[6px] hover:bg-gray-100 hover:text-[#8136AE] transition-colors"
                    >
                        Plans & Pricing
                    </Link>
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <button className="relative text-[22px] inline-flex items-center justify-center gap-3 h-14 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer">
                            <span className="flex items-center gap-3 transform transition-transform duration-700  translate-x-5 group-hover:-translate-x-2">
                                Get A Quote
                                <ArrowRight
                                    size={26}
                                    strokeWidth={3}
                                    className="opacity-0 translate-x-[5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                                />
                            </span>
                        </button>
                    </Link>
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
            <div
                className={`md:hidden bg-white shadow-lg origin-top transition-transform duration-700 ease-in-out transform -mt-3 ${isMobileMenuOpen ? "scale-y-100" : "scale-y-0"}`}
            >
                <Link
                    href="/about"
                    className="block px-6 py-3 text-black font-bold"
                    onClick={handleMobileLinkClick}
                >
                    About
                </Link>

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
                            className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#8136AE]" : "rotate-0"}`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ${isDropdownOpen ? "max-h-96" : "max-h-0"}`}
                    >
                        <Link
                            href="/services/digital-marketing"
                            className="block pl-12 py-2 text-black font-poppins font-bold"
                            onClick={handleMobileLinkClick}
                        >
                            Digital Marketing
                        </Link>
                        <Link
                            href="/services/branding"
                            className="block pl-12 py-2 text-black font-poppins font-bold"
                            onClick={handleMobileLinkClick}
                        >
                            Branding & Graphics Design
                        </Link>
                        <Link
                            href="/services/video-editing"
                            className="block pl-12 py-2 text-black font-poppins font-bold"
                            onClick={handleMobileLinkClick}
                        >
                            Video Editing & Animation
                        </Link>
                        <Link
                            href="/services/web-tech"
                            className="block pl-12 py-2 text-black font-poppins font-bold"
                            onClick={handleMobileLinkClick}
                        >
                            Website & Tech
                        </Link>
                    </div>
                </div>

                <Link
                    href="/our-work"
                    className="block px-6 py-3 text-black font-bold"
                    onClick={handleMobileLinkClick}
                >
                    Our Work
                </Link>
                <Link
                    href="/plansPricing"
                    className="block px-6 py-3 text-black font-bold"
                    onClick={handleMobileLinkClick}
                >
                    Plans & Pricing
                </Link>

                <div className="flex justify-center pt-3 pb-5">
                    <Link href="/contact" onClick={handleMobileLinkClick}>
                        <button className="relative text-[22px] inline-flex items-center justify-center gap-2 h-14 px-8 rounded-[48px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold">
                            Get A Quote
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
