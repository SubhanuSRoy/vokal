import React from "react";

import "./App.css";

import Recognizer from "./Components/Recognizer";
import logo from "./Assets/vokal.png";
import HeroSection from "./Components/HeroSection/HeroSection";
import Description from "./Components/Description/Description";

function App() {
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
      <div className="bg2">
        {/* description */}
        <Description />
        <Recognizer />
      </div>
    </div>
  );
}

export default App;
