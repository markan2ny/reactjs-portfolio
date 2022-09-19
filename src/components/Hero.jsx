import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { HeroSkill } from "../data/data";
import BgCircle from "./BgCircle";
import { motion } from "framer-motion";
import ImageHero from "../assets/hero.jpg";

const Hero = () => {
  const [text, count] = useTypewriter({
    words:
      HeroSkill.length > 0 ? HeroSkill : ["Programmer", "Front End Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-8 overflow-hidden text-center h-screen">
      <BgCircle />
      <img
        src={ImageHero}
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-[10]">
        <h2 className="uppercase text-[16px] text-gray-500 pb-2 tracking-[8px]">
          Mark Anthony Pascual
        </h2>
        <h1 className="text-4xl lg:text-5xl">
          <span>{text}</span>
          <Cursor cursorColor="#F2D388" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
