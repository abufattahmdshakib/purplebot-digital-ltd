import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="bg-black text-white pt-5 pb-18 font-poppins">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                {/* Section One: Logo + Company Info */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="-mt-18">
                        <Image
                            className="-ml-6"
                            src="/assist/design-white 1.svg"
                            alt="Purplebot Digital Logo"
                            width={220}
                            height={220}
                        />
                        <div className="border-t-2 border-[#353535] -mt-14 w-56"></div>
                    </div>
                    <div>
                        <p className="text-sm mb-2 mt-8">
                            Purplebot Digital Limited is a private limited company incorporated under the Companies Act XVIII of 1994 at the Joint Stock Companies and Firms of Bangladesh.
                        </p>
                        <p className="text-[12px] text-gray-400 mt-6">
                            © 2025 Purplebot Digital. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Section Two: Address */}
                <div className="flex-1 flex flex-col justify-center md:border-l-2 border-[#353535] pl-0 md:pl-10">
                    <h3 className="text-xl font-semibold mb-6">Address</h3>
                    <div className="flex items-start gap-2 mb-2">
                        <MapPin size={20} />
                        <p className="text-[16px]">
                            House 8, Road 8, Block F, Niketon, Gulshan-1, Dhaka-1212
                        </p>
                    </div>
                    <div className="flex items-start gap-2 mt-2">
                        <MapPin size={20} />
                        <p className="text-[16px]">
                            6128, Brandon Ave Suite 220, Springfield, VA 22150
                        </p>
                    </div>
                </div>

                {/* Section Three: Quick Links */}
                <div className="flex-1 flex flex-col justify-center border-t-2 md:border-t-0 md:border-l-2 border-[#353535] pt-8 md:pt-0 pl-0 md:pl-10 py-10">
                    <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-2 text-[16px]">
                        <li>
                            <a href="#" className="hover:text-purple-400">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-purple-400">Privacy & Terms</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-purple-400">Purple Blog</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-purple-400">Join Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
