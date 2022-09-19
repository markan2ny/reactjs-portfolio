import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'am Mark", "Programmer", "Frontend Developer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#181818" />
      </h1>
    </div>
  );
};

export default Hero;
