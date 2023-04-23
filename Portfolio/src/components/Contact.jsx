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
    name:"",
    email:"",
    message: "",
  })
  const formRef = useRef()
  const handleChange = (e) =>{
    const { name,value }= e.target
    setForm({
      ...form,
      [name]:value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      'service_9b9i1is',
      'template_zbw4mzo',
      { from_name:form.name,
        to_name:"Ben",
        from_email:form.email,
        to_email:"Officialbenragland@gmail.com",
        message:form.message
      },
      'wsWGnVkQ77GS1tusP'
    )


    .then(()=>{
      setLoading(false)
      alert("Thanks! I'll get back to you as soon possible :) ")
      setForm({
        name:" ",
        email:" ",
        message:" "
      })
    },(error)=>{
      alert("Oops, my apologies.Something went wrong here.Please send your message to my email directly: Officialbenragland@gmail.com")
    })


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
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
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
            placeholder="Email Address"
            className="border-none outlined-none font-medium bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-xl"
            onChange={handleChange}
            />
          </label>

          {/* Message Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea 
            name="message"
            value={form.message}
            placeholder= 'How can I help you?'
            className="border-none outlined-none font-medium bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-xl"
            rows={7}
            onChange={handleChange}
            />
          </label>

          <button
            className="outline-none w-fit bg-tertiary py-3 px-8 text-white font-bold shadow-md shadow-primary rounded-xl"

            type="submit"
          >
            {loading ? "Sending.." : 'Send'}
          </button>
        </form>

      </motion.div>

      <motion.div
        variants = {slideIn('right', "tween",0.2,1)}
        className="xl:flex-1 xl:h-auto xl:m-3 md:h-[550px] h-[350px]"
      >

      <EarthCanvas />
      </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")