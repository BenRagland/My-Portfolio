import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import StarsCanvas from "./canvas/Stars";
import {
  LeftMountainFaded,
  RightMountainFaded,
  MountainWater,
} from "../assets";

const HeroTwo = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto"
      style={{ background: "transparent" }}
    >
      {/* Hero content Container */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[20vh]
      mx-auto max-w-7xl flex flex-row justify-center gap-5 `}
      >
        {/* decorative timeline */}
        <div className="flex flex-col justify-start items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className=" w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* hero text */}
        <div >
          <h1 className={`${styles.heroHeadText}text-white `}>
            Hi, I'm <span className="text-[#915eff]">Ben</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Develop cool Shiii all the <br className="sm:block hidden" />
            time, this is a long sentence
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <img
        className="sm:h-[80vh] h-[50vh] opacity-90 absolute left-0 bottom-0 z-[12]"
        src={LeftMountainFaded}
        alt="Blue Mountain"
      />

      <img
        className=" sm:h-[70vh] h-[40vh] opacity-60 absolute bottom-0 w-full z-0"
        src={MountainWater}
        alt="Blue Water"
      />

      <img
        className="sm:h-[65vh] h-[45vh] absolute right-0  bottom-0 z-10"
        src={RightMountainFaded}
        alt="Blue Mountains"
      />


      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-white 
            flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroTwo;
