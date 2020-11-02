import React from "react";
import "./App.css";
import { AboutPage } from "./AboutPage/AboutPage";
import { LandingPage } from "./LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutPage />
    </div>
  );
}

export default App;
