import { ArrowRight } from 'lucide-react';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaBehance } from 'react-icons/fa';
import { FaArrowRight, FaGithub } from 'react-icons/fa6';
import { IoMailUnreadOutline } from "react-icons/io5";

function LetsTalk() {
  return (
    <section className="max-w-6xl mx-auto px-2 md:px-0 flex flex-col md:flex-row items-center justify-between gap-6 bg-white my-12">

      {/* Left: Contact Info */}
      <div className="flex-1 text-left">
        <h2 className="w-46 mx-0 text-4xl md:text-[72px] font-extrabold bg-gradient-to-r from-[#37174a] via-[#c91a7b] to-[#c91a7b] bg-clip-text text-transparent mb-4">
          Let's Talk.
        </h2>

        <p className="relative text-[18px] font-[500] md:text-[20px] text-black mb-2 inline-block pb-1">
          abufattahmdshakib21@gmail.com
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#37174a] via-[#c91a7b] to-[#c91a7b]"></span>
        </p>


        <p className="flex justify-start items-center gap-2 text-[20px] md:text-[28px] font-[700] bg-gradient-to-r from-[#c91a7b] via-[#37174a] to-[#37174a] bg-clip-text text-transparent  mt-4 mb-2">
          Call/WhatsApp us <span><FaArrowRight className='text-black' /></span>
        </p>
        <p className="relative text-[18px] md:text-[20px] font-[500] mb-4 inline-block pb-1">
          +88 01710497133
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#37174a] via-[#c91a7b] to-[#c91a7b]"></span>
        </p>

        {/* Social Icons */}
        <div className="flex justify-start gap-4 mt-4">
          <a href="https://www.facebook.com/abufattahmdshakib" target="_blank" rel="noopener noreferrer" className="text-blue-600 bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition-all duration-300 md:p-3">
            <FaFacebookF className="size-6 md:size-8" />
          </a>
          <a href="https://github.com/abufattahmdshakib" target="_blank" rel="noopener noreferrer" className="text-gray-800 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all duration-300 md:p-3">
            <FaGithub className="size-6 md:size-8" />
          </a>
          <a href="https://www.linkedin.com/in/abu-fattah-md-shakib/" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition-all duration-300 md:p-3">
            <FaLinkedinIn className="size-6 md:size-8" />
          </a>
        </div>


      </div>

      {/* Center: Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="/assist/Talk-footer.webp"
          alt="Contact Illustration"
          className="w-72 md:w-96 h-auto"
        />
      </div>

      {/* Right: Newsletter */}
      <div className="flex-1 text-center md:text-right">
        <h3 className="text-2xl md:text-[52px] font-[500] leading-14 text-black mb-3">
          Join the <span className="text-[#C81A7A] font-[700]">Newsletter</span>
        </h3>
        <p className="text-sm md:text-[18px] font-[400] mb-6 text-black">
          Drop your email address and we'll send you a monthly update of the cool stuff we made for our clients.
        </p>
        <p className='text-sm md:text-[18px] font-[500] text-black mb-4'>We'll keep it fun and short – we promise!</p>

        <form className="flex flex-col sm:flex-row items-center gap-3 relative mb-6">
          <div className="relative w-full sm:flex-1">
            <input
              type="email"
              placeholder="Subscribe Now"
              className="w-full h-14 px-4 pr-12 bg-[#F3DEEE] rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C91A7B] placeholder-white placeholder:text-[20px] placeholder:font-[500] "
            />
            {/* Inbox Icon */}
            <IoMailUnreadOutline
              className="text-gray-400 w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </form>

        <button className="relative text-[18px] text-center md:text-[22px] inline-flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer">
          <span className="flex items-center gap-2 transform transition-transform duration-700 translate-x-4 group-hover:-translate-x-3">
            Subscribe Now
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

export default LetsTalk;
