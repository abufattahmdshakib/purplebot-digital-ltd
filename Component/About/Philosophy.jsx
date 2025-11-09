import React from "react";

function Philosophy() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-white p-6"
      style={{ backgroundImage: "url('/assist/Philosophy-bg.png')" }}
    >
      <div className="text-center">
        <h1 className="text-[40px] md:text-[56px] font-[700] leading-12 sm:leading-14 mt-0 sm:mt-12 mb-8 text-transparent bg-clip-text bg-gradient-to-t from-[#851B67] to-[#C81A7A]">
          The Purple Philosophy
        </h1>
        <p className="text-[16px] font-[400] my-12">
          Purplebot is an amalgamation of the words “Purple” and “Bot”. The color
          Purple represents something unique, vibrant and special. It is also
          inspired by the “Purple Cow” concept developed by marketer and
          entrepreneur Seth Godin that states that companies must build things
          worth noticing right into their products or services. The “Bot” comes
          from “robot” that symbolizes our foray into the exciting future of
          digital media, machine learning and artificial intelligence in
          marketing.
        </p>
        <p className="text-[16px] font-[400] leading-relaxed mb-8">
          Surpassing the traditional 4Ps of marketing – Product, Price, Place and
          Promotion, “Purple” is the new “P”. We not only make our ideas special,
          We make them <span className="text-[#de2dc5] font-[800]">Purple!</span>
        </p>
      </div>
    </div>
  );
}

export default Philosophy;
