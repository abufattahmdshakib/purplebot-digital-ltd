"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { User, Globe, Mail, ArrowRight } from "lucide-react";

const services = [
    "Digital Marketing Services (Paid Ads, SEO, etc.)",
    "Branding & Graphics Design",
    "Video Editing & Animation",
    "Others",
    "Website & Tech",
    "Social Media Management (Fixed or Custom Package)",
];

export default function GetStartedForm() {
    const [selectedServices, setSelectedServices] = useState([]);
    const [phone, setPhone] = useState("");

    const toggleService = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    };

    const handleEnterClear = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            e.target.value = "";
        }
    };

    return (
        <section className="flex items-center justify-center px-2 sm:px-4 py-12">
            <div className="w-full max-w-6xl bg-[#FFFFFF33] backdrop-blur-2xl rounded-3xl shadow-sm border border-[#ed88bf] p-2 sm:p-8">
                <h2 className="text-[38px] sm:text-[64px] font-[700] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#C81A7A] to-[#851B67] pt-12 mb-2">
                    Get Started
                </h2>
                <p className="text-center w-80 sm:w-full mx-auto text-[24px] text-gray-500 font-[400] mb-10">
                    Leave your contact details and we will get in touch
                </p>

                <form className="space-y-6 sm:space-y-12 p-0 sm:p-8">
                    {/* Name + Company */}
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                        <div>
                            <label className="block text-[14px] font-[500] text-black mb-3">
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder=" Enter your name"
                                    required
                                    className="w-full rounded-lg pr-10 py-5 pl-4 bg-white shadow-sm text-gray-800 placeholder-gray-400 border-none outline-none focus:ring-0 focus:border-none"
                                />
                                <User
                                    className="absolute right-5 top-5 text-gray-300"
                                    size={28}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[14px] font-[500] text-black mb-3">
                                Your Company's website/Socials
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your website URL"
                                    className="w-full rounded-lg pr-10 py-5 pl-4 bg-white shadow-sm text-gray-800 placeholder-gray-400 border-none outline-none focus:ring-0 focus:border-none"
                                />
                                <Globe
                                    className="absolute right-5 top-5 text-gray-300"
                                    size={28}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-[14px] font-[500] text-black mb-3">
                                Your Email <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    required
                                    className="w-full rounded-lg pr-10 py-5 pl-4 bg-white shadow-sm text-gray-800 placeholder-gray-400 border-none outline-none focus:ring-0 focus:border-none"
                                />
                                <Mail
                                    className="absolute right-5 top-5 text-gray-300"
                                    size={28}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[14px] font-[500] text-black mb-3">
                                Your Phone Number/WhatsApp <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <PhoneInput
                                    country={"bd"}
                                    value={phone}
                                    onChange={setPhone}
                                    inputStyle={{
                                        width: "100%",
                                        height: "64px",       
                                        borderRadius: "0.50rem",
                                        paddingLeft: "70px", 
                                        backgroundColor: "white",
                                        border: "none",
                                        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                                        color: "#1F2937",
                                        fontSize: "16px",
                                    }}
                                    buttonStyle={{
                                        border: "none",
                                        background: "transparent",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        left: "10px",
                                        width: "70px",      
                                        height: "70px",
                                    }}
                                    dropdownStyle={{
                                        borderRadius: "0.5rem",
                                    }}
                                    enableSearch={true}
                                />
                                <IoIosPhonePortrait
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300"
                                    size={28}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h3 className="text-[38px] sm:text-[40px] font-[600] leading-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#C81A7A] to-[#851B67] mt-10 mb-2">
                            Services you are interested in
                        </h3>
                        <p className="text-center text-[24px] text-gray-500 font-[400] mb-16">
                            Please select at least one
                        </p>
                        <div className="grid grid-cols-1  sm:grid-cols-3 gap-4">
                            {services.map((service) => (
                                <label
                                    key={service}
                                    className={`flex items-center space-x-3 bg-white border border-gray-200 
      rounded-[56px] px-4 shadow-sm cursor-pointer hover:border-[#C81A7A] hover:shadow-md 
      transition-all duration-200 min-h-[80px]`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedServices.includes(service)}
                                        onChange={() => toggleService(service)}
                                        className="w-5 h-5 mt-1 accent-[#C81A7A] border-gray-300 rounded focus:ring-0 shrink-0"
                                    />
                                    <span className="text-gray-800 text-sm font-medium leading-snug">
                                        {service}
                                    </span>
                                </label>
                            ))}
                        </div>

                    </div>

                    {/* Desktop Button */}
                    <div className="text-center mb-6">
                        <button onKeyDown={handleEnterClear} className="relative text-[18px] sm:text-[22px] inline-flex items-center justify-center gap-3 h-16 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer">
                            <span className="flex items-center gap-3 transform transition-transform duration-700  translate-x-5 group-hover:-translate-x-2">
                                Submit And Go Purple
                                <ArrowRight
                                    size={26}
                                    strokeWidth={3}
                                    className="opacity-0 translate-x-[5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                                />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
