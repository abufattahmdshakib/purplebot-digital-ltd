import { ArrowRight } from "lucide-react";
import React from "react";

function ExploreOurWork() {
    return (
        <div>
            <div className=" flex flex-col items-center text-center space-y-4 py-8">
                <button className="relative text-[18px] text-center md:text-[22px] inline-flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer">
                    <span className="flex items-center gap-2 transform transition-transform duration-700 translate-x-4 group-hover:-translate-x-3">
                        Explore Our Work
                        <ArrowRight
                            size={26}
                            strokeWidth={3}
                            className="opacity-0 translate-x-[5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                        />
                    </span>
                </button>
                <p className="font-poppins text-black text-[22px] md:text-[25px] font-[600] md:font-[800] leading-[150%]">
                    Trusted by renowned multi-nationals, startups, and SMEs
                </p>
            </div>
        </div>
    );
}

export default ExploreOurWork;
