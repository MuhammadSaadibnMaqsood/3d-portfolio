import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Work from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from './components/Contact'
import StarsCanvas from './components/StarsCanvas'
const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Work />
      <Feedbacks />

      <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
      </div>
    </div>
  );
};

export default App;
