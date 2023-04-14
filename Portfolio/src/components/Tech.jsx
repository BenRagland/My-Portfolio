import React from 'react'
import {BallCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { technologies } from '../constants'
import {styles} from '../style'


const Tech = () => {
  return (
    <>
      <h2 className={`text-secondary mb-[12vh] text-xl`}>Technologies</h2>
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