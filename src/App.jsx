import React from "react";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
const App = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Navbar />
      <section
        id="hero"
        className="snap-center"
      >
        <Hero />
      </section>
    </div>
  );
};

export default App;
