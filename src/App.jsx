import React from "react";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
const App = () => {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
    </>
  );
};

export default App;
