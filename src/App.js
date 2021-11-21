import React from "react";

// import "./App.css";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Recognizer from "./Components/Recognizer";
import MainScreen from "./Components/MainScreen/MainScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainScreen />} />
        <Route exact path="/vokal" element={<Recognizer />} />
      </Routes>
    </Router>
  );
}

export default App;
