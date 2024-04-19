import React from "react";
import logo from "../assets/TF.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsCloudDownload } from "react-icons/bs";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [0, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeateType: "reverse ",
    },
  },
});

const Navbar = () => {
  return (
    <nav className="flex mb-20 items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-28" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className=" flex justify-center items-center"
        >
          <motion.a
            href="src\assets\kevinRushLogo.png"
            download
            className=" hover:bg-gray-800 text-grey-800 font-bold my-2 mx-10 rounded inline-flex items-center"
          >
            <BsCloudDownload />
            {/* <span>Download</span> */}
          </motion.a>
        </motion.div>
        <a target="_blank" href="https://www.linkedin.com/in/travizxfernandez/">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/travis2319">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.instagram.com/just_travizz/">
          <FaInstagram />
        </a>
        <a target="_blank" href="https://twitter.com/Travisf22033396">
          {" "}
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
