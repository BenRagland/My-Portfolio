import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Hero content Container */}
      <div className={`${styles.paddingX} absolute border-2 border-white inset-0 top-[120px]
      mx-auto max-w-7xl flex flex-row items-start gap-5 `}
      >
        {/* decorative timeline */}
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className=" w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        {/* hero text */}
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>Hi, I'm <span className="text-[#915eff]">
            Ben</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> 
          I Develop cool Shiii all the <br className="sm:block hidden"/>time, this is a long sentence</p>
        </div>
      </div>

      <ComputersCanvas />
      
    </section>
  );
};

export default Hero;
