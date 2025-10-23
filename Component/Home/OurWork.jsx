"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import projects from "./projects ";

// ✅ Function to generate full sequence with text first
const generateSequence = (arr) => ["ourwork", ...arr];

function OurWork() {
    const controls = useAnimation();
    const x = useMotionValue(0);
    const currentX = useRef(0);
    const hoverTimeout = useRef(null);
    const marqueeRef = useRef(null);
    const [scrollWidth, setScrollWidth] = useState(0);

    x.on("change", (latest) => {
        currentX.current = latest;
    });

    useEffect(() => {
        if (marqueeRef.current) {
            setScrollWidth(marqueeRef.current.scrollWidth / 2);
        }
    }, []);

    const startMarquee = (startFrom = currentX.current, duration = 40) => {
        if (!scrollWidth) return;
        controls.start({
            x: [startFrom, startFrom - scrollWidth],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration,
                    ease: "linear",
                },
            },
        });
    };

    // Initial effect with 2s delay
    useEffect(() => {
        if (scrollWidth) {
            const timeout = setTimeout(() => {
                startMarquee(0, 40);
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [scrollWidth]);

    // Generate sequences using projects array
    const projectItems = projects.map((proj) => proj); // just to be clear
    const sequence = generateSequence(projectItems);
    const duplicateSequence = generateSequence(projectItems);

    return (
        <div className=" relative py-4 bg-[#fdfdfd]">
            <div className="overflow-hidden relative max-w-full mx-auto">
                <motion.div
                    ref={marqueeRef}
                    className="flex gap-6"
                    animate={controls}
                    style={{ x }}
                    onHoverStart={() => {
                        hoverTimeout.current = setTimeout(() => {
                            controls.stop();
                        }, 100);
                    }}
                    onHoverEnd={() => {
                        clearTimeout(hoverTimeout.current);
                        startMarquee(currentX.current, 40);
                    }}
                >
                    {/* ✅ First sequence */}
                    {sequence.map((item, idx) =>
                        item === "ourwork" ? (
                            <div
                                key={`ourwork-${idx}`}
                                className="relative flex-shrink-0 w-32 md:w-72 h-52 md:h-[550px] flex items-end justify-center p-4"
                            >
                                <h2
                                    className="text-[48px] md:text-[96px] font-bold leading-[87%] font-[Poppins]"
                                    style={{
                                        background:
                                            "linear-gradient(244deg, #851B67 18.5%, #1F0618 97.63%)",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Our Work
                                </h2>
                            </div>
                        ) : (
                            <div
                                key={`proj-${idx}`}
                                className="relative flex-shrink-0 w-32 md:w-72 group"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-52 md:h-[550px] object-cover rounded-xl md:rounded-2xl shadow-lg"
                                />
                                <div
                                    className="font-poppins absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#1F0618] to-[#851B67]/60 bg-opacity-40 md:bg-opacity-30  opacity-90 md:opacity-0 md:group-hover:opacity-80 transition-opacity text-white p-1 md:p-4 rounded-b-xl"
                                >
                                    <p className="font-extrabold text-[14px] md:text-[32px] opacity-100 leading-[1.1] mb-1 md:mb-4">{item.title}</p>
                                    <p className="text-[10px] md:text-[22px] font-[600] opacity-100 leading-[1]">{item.description}</p>
                                </div>
                            </div>
                        )
                    )}

                    {/* ✅ Duplicate sequence for smooth infinite loop */}
                    {duplicateSequence.map((item, idx) =>
                        item === "ourwork" ? (
                            <div
                                key={`dup-ourwork-${idx}`}
                                className="relative flex-shrink-0 w-32 md:w-72 h-52 md:h-[550px] flex items-end justify-center p-4"
                            >
                                <h2
                                    className="text-[48px] md:text-[96px] font-bold leading-[87%] font-[Poppins]"
                                    style={{
                                        background:
                                            "linear-gradient(244deg, #851B67 18.5%, #1F0618 97.63%)",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Our Work
                                </h2>
                            </div>
                        ) : (
                            <div
                                key={`dup-proj-${idx}`}
                                className="relative flex-shrink-0 w-32 md:w-72 group"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-52 md:h-[550px] object-cover rounded-xl md:rounded-2xl shadow-lg"
                                />
                            </div>
                        )
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default OurWork;
