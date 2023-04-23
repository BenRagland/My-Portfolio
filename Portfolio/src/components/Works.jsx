import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import { fadeIn,textVariant} from '../utils/motion.js'
import {styles} from '../style'
import { SectionWrapper } from '../hoc'
import {projects} from '../constants'
const ProjectTile =({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) =>{
  return(
    
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div  className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt="Project Image"
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={""}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}




const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div>
          <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Showcasing my coding prowess! Here 
            you'll find real-world examples of my projects, each with a brief 
            rundown, code repositories, and live demos to play with. My work 
            displays my ability to tackle challenges, navigate different
            technologies, and get things done with style. So, sit back, relax, 
            and explore what I've cooked up for you!
          </motion.p>
      </div>

      <div className='mt-20 justify-center sm:flex sm:flex-wrap gap-7'>
        {projects.map((project,index) =>(
          <ProjectTile key={`project-${index}`} index={project.index} {...project}/>
        ))}

      </div>
    </>

  
  )
}

export default SectionWrapper(Works," ")