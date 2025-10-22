import React from 'react'

function Achievements() {
    return (
        <div className='block -mt-40 md:mt-8 max-w-7xl mx-auto'>
            <div className='flex justify-between items-center px-10 md:px-16'>
                <div className='block md:flex items-center gap-3 md:gap-5'>
                    <h1
                        className="font-poppins font-black text-left text-[28px] sm:text-[36px] md:text-[60px] lg:text-[90px] leading-[1.5] md:leading-[1.0]"
                        style={{
                            background: "linear-gradient(to top, #851B67 0%, #C81A7A 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        8+
                    </h1>
                    <div>
                        <p className='font-poppins font-[800] text-black text-left text-[16px] md:text-[32px] leading-[1.2]'>Years of</p>
                        <p
                            className="font-poppins font-semibold text-[#CA1A7B] text-left text-[16px] md:text-[28px] leading-[1.2]"
                        >
                            Experience
                        </p>

                    </div>
                </div>
                <div className='border-1 h-20 md:h-28 border-gray-300'></div>
                <div className='block md:flex items-center gap-3 md:gap-5'>
                    <h1
                        className="font-poppins font-black text-left text-[28px] sm:text-[36px] md:text-[60px] lg:text-[90px] leading-[1.5] md:leading-[1.0]"
                        style={{
                            background: "linear-gradient(to top, #851B67 0%, #C81A7A 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        100+
                    </h1>
                    <div>
                        <p className='font-poppins font-[800] text-black text-left text-[16px] md:text-[32px] leading-[1.2]'>Clients Across</p>
                        <p
                            className="font-poppins font-semibold text-[#CA1A7B] text-left text-[16px] md:text-[28px] leading-[1.2]"
                        >
                            Multiple Industries
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className='font-poppins font-[500] text-black text-center text-[16px] md:text-[18px] my-8 md:my-12 px-2 md:px-8'>At Purplebot, we embrace and adapt to new tools, channels and technologies to offer <strong>effective design</strong> and contentsolutions to our clients. We are <strong>appreciated by brands and consumers alike</strong> for the creativity we bring to the table.Whatever the challenge, we drive forward with one goal in mind - <strong>growth for our clients and partners.</strong></p>
            </div>
        </div>
    )
}

export default Achievements