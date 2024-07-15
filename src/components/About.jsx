import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services, overviewP1,overviewP2 } from "../constants";
import {SectionWrapper}  from "../hoc";
import PropTypes from "prop-types";
import {AiOutlineLinkedin} from 'react-icons/ai'


import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div>

      <div className="relative">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Who AM I?</h2>
        
        
          <a className=" absolute top-3 ml-[20em] sm:top-8 sm:ml-[25em] flex flex-col justify-center md:text-[20px] text-[12px]"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/benragland/">
            <AiOutlineLinkedin size={40}/>
            Linkedin
          </a>
        </motion.div>
      </div>

      <div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {overviewP1}
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {overviewP2}
        </motion.p>

        
      </div>

      <div className="mt-20 flex justify-center md:justify-start flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

        
        
        
      </div>

      

    </div>
  );
};

export default SectionWrapper(About, "about");
