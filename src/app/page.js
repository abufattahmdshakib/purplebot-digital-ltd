import React from "react";
import BannerPage from "../../Component/Home/BannerPage";
import Achievements from "../../Component/Home/Achievements";
import OurWork from "../../Component/Home/OurWork";
import ExploreOurWork from "../../Component/Home/ExploreOurWork";

function Home() {
  return (
    <div className="font-poppins container mx-auto">

      {/* Main Content */}
      <div className="pt-24 md:pt-18">
        {/* Your page content goes here */}
        <div className="flex flex-col justify-between">
          <div className="flex-1">
            <BannerPage />
            <Achievements />
            <OurWork />
            <ExploreOurWork />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
