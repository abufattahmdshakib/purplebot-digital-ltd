"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const images = [
    "/assist/work (16).webp",
    "/assist/work (15).webp",
    "/assist/work (14).webp",
    "/assist/work (13).webp",
    "/assist/work (12).webp",
    "/assist/work (11).webp",
    "/assist/work (10).webp",
    "/assist/work (9).webp",
    "/assist/work.webp",
    "/assist/work (2).webp",
    "/assist/work (3).webp",
    "/assist/work (5).webp",
    "/assist/work (8).webp",
    "/assist/work (6).webp",
    "/assist/work (7).webp",
    "/assist/work (4).webp",
];

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
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [scrollWidth]);

    const sequence = generateSequence(images);
    const duplicateSequence = generateSequence(images);

    return (
        <div className="max-w-7xl mx-auto relative py-4 bg-[#fdfdfd]">
            <div className="overflow-hidden relative max-w-full mx-auto">
                <motion.div
                    ref={marqueeRef}
                    className="flex gap-6"
                    animate={controls}
                    style={{ x }}
                    onHoverStart={() => {
                        hoverTimeout.current = setTimeout(() => {
                            controls.stop();
                        }, 1500);
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
                                key={`img-${idx}`}
                                className="relative flex-shrink-0 w-32 md:w-72 group"
                            >
                                <img
                                    src={item}
                                    alt={`work-${idx}`}
                                    className="w-full h-52 md:h-[550px] object-cover rounded-xl md:rounded-4xl shadow-lg"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 rounded-b-xl">
                                    <p>Project {idx + 1} Description</p>
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
                                key={`dup-img-${idx}`}
                                className="relative flex-shrink-0 w-32 md:w-72 group"
                            >
                                <img
                                    src={item}
                                    alt={`work-dup-${idx}`}
                                    className="w-full h-52 md:h-[550px] object-cover rounded-4xl shadow-lg"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 rounded-b-xl">
                                    <p>Project {idx + 1} Description</p>
                                </div>
                            </div>
                        )
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default OurWork;
