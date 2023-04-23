import React from 'react'
import {BallCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { technologies } from '../constants'
import {styles} from '../style'


const Tech = () => {
  return (
    <>
      <h2 className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#915eff] mb-[8vh] `}>Tool Belt</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map( (tech) => (
          <div className="w-28 h-28 flex flex-col items-center " key={tech.name}>
            <BallCanvas   icon={tech.icon} />
            <p className="text-secondary">{tech.name}</p>
          </div>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Tech,"")