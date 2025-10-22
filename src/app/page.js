import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import BannerPage from "../../Component/Home/BannerPage";
import Achievements from "../../Component/Home/Achievements";
import OurWork from "../../Component/Home/OurWork";

function Home() {
  return (
    <div className="font-poppins">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 md:pt-18"> 
        {/* Your page content goes here */}
        <div className="min-h-[calc(100vh-95%)] flex flex-col justify-between">
          <div className="flex-1">
            <BannerPage />
            <Achievements />
            <OurWork />
          </div>
        

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
