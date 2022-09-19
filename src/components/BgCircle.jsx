import React from "react";
import { motion } from "framer-motion";
const BgCircle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2 }}
      className="relative flex justify-center items-center"
    >
      <div className="rounded-full border border-[#333] w-[200px] h-[200px] animate-ping mt-52 absolute" />
      <div className="rounded-full border border-[#333] w-[300px] h-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#333] w-[500px] h-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#395B64] w-[650px] h-[650px] absolute mt-52 animate-pulse" />
      {/* <div className="rounded-full border border-[#333] w-[800px] h-[800px] absolute mt-52" /> */}
    </motion.div>
  );
};
export default BgCircle;
