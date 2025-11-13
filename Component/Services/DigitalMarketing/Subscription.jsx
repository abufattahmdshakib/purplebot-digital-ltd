import React from 'react';
import { useRouter } from "next/navigation";
import { ArrowRight } from 'lucide-react';

function Subscription() {
    const router = useRouter();
    return (
        <section className='bg-gradient-to-r from-[#742d97] to-[#130617] rounded-3xl sm:rounded-[38px] mx-2 sm:mx-5 mt-5 sm:mt-16'>
            <div className="flex justify-between max-w-7xl mx-auto items-center gap-2 py-6 sm:py-16 px-2 sm:px-16">
                {/* Heading */}
                <h2 className="text-2xl sm:text-5xl text-left text-white font-extrabold leading-snug">
                    Subscription packages<br />tailored to your needs.
                </h2>

                {/* Button */}
                <button
                    onClick={() => router.push("/plansPricing")}
                    className="relative text-[18px] text-center md:text-[22px] inline-flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer"
                >
                    <span className="flex items-center gap-2 transform transition-transform duration-700 translate-x-4 group-hover:-translate-x-3">
                        Get a Quote
                        <ArrowRight
                            size={26}
                            strokeWidth={3}
                            className="opacity-0 translate-x-[5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                        />
                    </span>
                </button>
            </div>
        </section>
    );
}

export default Subscription;
