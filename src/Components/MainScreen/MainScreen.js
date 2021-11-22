import React from "react";

import "../../App.css";
import Description from "../Description/Description";
import HeroSection from "../HeroSection/HeroSection";
import logo from "../../Assets/vokal.png";
import Flowchart from "../Flowchart/Flowchart";

function MainScreen() {
  return (
    <div className="app">
      <div className="bg1">
        <header className="header">
          
          {/* logo */}
          <img src={logo} alt="vokal logo" />
        </header>

        {/* illustration and main text */}
        <HeroSection />
      </div>
      <div className="bg1">
        {/* description */}
        <Description />
        <Flowchart/>
      </div>
    </div>
  );
}

export default MainScreen;
