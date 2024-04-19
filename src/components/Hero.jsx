import React from "react";
import { HERO_CONTENT } from "../constants/index.js";
import profilepic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-14 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
          >
            Travis<span> Fernandes</span>
          </motion.h1>
          <motion.span
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            Full Stack Devloper
          </motion.span>
          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="m-2 max-w-xl py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 lg:p-20">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              src={profilepic}
              alt="profilePic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
