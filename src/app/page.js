import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

function Home() {
  return (
    <div className="font-poppins">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 md:pt-28"> 
        {/* pt-24 ≈ 6rem for mobile, md:pt-28 ≈ 7rem for desktop */}
        {/* Your page content goes here */}
        <div className="min-h-[calc(100vh-95%)] flex flex-col justify-between">
          {/* Example content placeholder */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-center mt-20">
              Welcome to Purplebot Digital
            </h1>
            <p className="text-center mt-4 text-gray-600">
              Your business solution starts here.
            </p>
          </div>
        

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
