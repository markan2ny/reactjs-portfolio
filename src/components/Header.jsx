import React from "react";
import { SocialLinks } from "../data/data";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between max-w-7xl mx-auto p-5 sticky top-0">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {SocialLinks &&
          SocialLinks.map((link) => (
            <SocialIcon
              key={link.title}
              url={link.link}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex-row flex items-center text-gray-300"
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer"
        />
        <p className="hidden md:inline-flex uppercase">Get In Touch</p>
      </motion.div>
    </header>
  );
};

export default Navbar;
