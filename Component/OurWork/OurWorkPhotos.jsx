"use client";
import React, { useState } from 'react';
import projects from "../Home/projects.jsx";

function OurWorkPhotos() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "Digital", "Branding", "AV", "Website"];

    // Filter projects based on active filter
    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((item) => item.category === activeFilter);

    return (
        <div className="mb-6 sm:mb-10 px-2">
            {/* Heading */}
            <h1 className="text-[68px] sm:text-[82px] font-[700] mt-5 sm:mt-16 text-center text-transparent bg-clip-text bg-gradient-to-t from-[#851B67] to-[#C81A7A] ">Our Work</h1>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-3 sm:gap-15 mb-8 flex-wrap">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`font-[400] transition-colors text-[20px] sm:text-[24px]
    ${activeFilter === filter
                                ? "border-b-2 border-[#C81A7A] px-1 sm:px-4" 
                                : " text-black"} 
  `}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-8 max-w-5xl mx-auto">
                {filteredProjects.map((item, idx) => (
                    <div
                        key={`proj-${idx}`}
                        className="relative flex-shrink-0 w-40 md:w-80  mx-auto group overflow-hidden shadow-lg"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-62 md:h-[420px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#1F0618] to-[#851B67]/60 bg-opacity-40 md:bg-opacity-30 opacity-90 md:opacity-0 md:group-hover:opacity-80 transition-opacity text-white p-2 md:p-4">
                            <p className="font-[500] sm:font-[600] text-[16px] md:text-[24px] leading-[1.2] mb-2 md:mb-4">{item.title}</p>
                            <p className="text-[14px] md:text-[18px] hidden sm:block font-[400] sm:font-[500] leading-1.1 sm:leading-[1.5]">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurWorkPhotos;
