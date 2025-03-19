import React from 'react'
import pic from '../images/profilephoto.jpg'
import { motion } from 'framer-motion'
import Certificates from '../components/Certificates'
import Projects from '../components/Projects'


function Home() {
  return (
    <div className='flex flex-col gap-15 lg:mt-10 mt-32 lg:p-10'>
    <motion.div
  whileHover={{opacity:1, scale: 1.05 }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 0.8, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className=" flex items-center justify-center rounded-xl ">
    <div className=' menu ml-1/4 p-5 flex-1  rounded-3xl shadow-xl shadow-amber-200 hover:shadow-2xl hover:shadow-purple-500 text-white '>
    <p className='text-5xl text-purple-500 '>hire me.... </p>
    <div className='flex md:flex-col flex-col lg:flex-row-reverse  gap-1 '>
    <div className='m-1 '>
        <img src={pic} alt='photo' className='rounded-full lg:h-50 lg:w-160  w-50 h-50' />
      </div>
      <div>
        
        <p className='p-4 m-2 text-2xl '>Hello! I'm Nazeer, a passionate and motivated <span className='text-red-500 text-3xl font-bold'>Full Stack Java Developer </span>with a background in Computer Science and Engineering (CSE). 
        I graduated in 2024, and now I’m excited to dive into the tech world, 
         bringing my skills and enthusiasm for building innovative software solutions.</p><br/>
      </div>
    
    </div>
    
    </div>
    </motion.div>
      <motion.div
      whileHover={{opacity:1, scale: 1.05 }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" flex items-center justify-center rounded-xl lg:m-4"
      >
        <Certificates/>
      </motion.div>
      <motion.div
        whileHover={{opacity:1, scale: 1.05 }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" flex items-center justify-center rounded-xl lg:m-4"
      >
        <Projects/>
      </motion.div>
    </div>

  )
}

export default Home



