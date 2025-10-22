import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import BannerPage from "../../Component/Home/BannerPage";

function Home() {
  return (
    <div className="font-poppins">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 md:pt-18"> 
        {/* Your page content goes here */}
        <div className="min-h-[calc(100vh-95%)] flex flex-col justify-between">
          {/* Example content placeholder */}
          <div className="flex-1">
            <BannerPage></BannerPage>
          </div>
        

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
