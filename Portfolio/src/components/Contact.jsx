import React from 'react'
import {useState, useRef} from 'react'

import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import {styles} from '../style'
import {EarthCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'




const Contact = () => {
  const [ loading, setLoading ] = useState(false)
  const [form , setForm ] = useState({
    name:" ",
    email:"",
    message: " ",
  })
  const formRef = useRef()
  const handleChange = (e) =>{

  }
  const handleSubmit = (e) =>{

  }

  return (
    <div className = "xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants = {slideIn('left', "tween",0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className ={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
            type="text"
            name="text"
            value={form.name}
            placeholder="Your Name Here"
            className="border-none outlined-none font-medium bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-xl"
            />
          </label>
          {/* Email Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
            type="email"
            name="email"
            value={form.email}
            placeholder="Your Email Here"
            className="border-none outlined-none font-medium bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-xl"
            />
          </label>
          {/* Message Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea 
            name="message"
            value={form.message}
            placeholder="How can I help you?"
            className="border-none outlined-none font-medium bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-xl"
            rows="7"
            />
          </label>

          <button
            className="outline-none w-fit bg-tertiary py-3 px-8 text-white font-bold shadow-md rounded-xl"

            type="submit"
          >
            {loading ? "Sending.." : 'Send'}
          </button>
        </form>

      </motion.div>

      <motion.div
        variants = {slideIn('right', "tween",0.2,1)}
        className="xl:flex-1 xl:h-full md:h-[550px] h-[350px]"
      >

      <EarthCanvas />
      </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")