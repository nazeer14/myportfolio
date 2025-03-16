import React from 'react'
import {motion} from 'framer-motion'
function Education() {
  return (
  
    <div className='flex lg:grid lg:grid-cols-2 flex-col justify-around'>
         <motion.div
    whileHover={{opacity:1, scale: 1.05 }}
  >
      <div className='menu flex flex-col gap-4 m-5 bg-blue-1000 p-4 justify-around rounded-2xl border-solid bg-black shadow-lg shadow-blue-800  hover:shadow-amber-200 '>
   
      <div className=' justify-items-center text-2xl underlin'><p>B-Tech</p></div>
        <li className='pl-5 text-xl'><span className='text-yellow-600 p-1.5 mr-2 '>Branch :  </span> Computer Science and Engineering</li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 text-xl mr-2 '>University : </span>JNTU Hyderabad</li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 text-xl mr-2 '>Collage : </span>Sana Engineering College</li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 text-xl mr-2 '>Acadamic Years :  </span> 2020 - 2024</li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 text-xl mr-2 '>Place :  </span> Kodad</li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 text-xl mr-2'>CGPA :  </span> 7.13</li>
        
      </div></motion.div>
      <motion.div
    whileHover={{ opacity: 1,scale: 1.05 }}
  >
      <div className='menu flex flex-col gap-4 m-5 bg-blue-1000 p-4 justify-around rounded-2xl border-solid bg-black shadow-lg shadow-blue-800 hover:shadow-amber-200 '>
        <div className='justify-items-center text-2xl underline '><p>Intermediate</p></div>
        <li className='pl-5 text-xl'><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'>Branch :  </span> MPC</li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'>Board :  </span>Telangana Board of Intermediate 
        Education.  </li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'> College:  </span> Laqshya Junior College</li>
        <li className='pl-5 text-xl  '><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'>Acadamic Years :  </span> 2018 to 2020 </li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'>Place :  </span> Kodad</li>
        <li className='pl-5 text-xl'><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'>Marks :  </span> 647</li>
       
      </div>
      </motion.div>
      <motion.div
    whileHover={{ scale: 1.05 }}
  >
      <div className=' menu flex flex-col gap-4 m-5 bg-blue-1000 p-4 justify-around rounded-2xl border-solid bg-black shadow-lg shadow-blue-800  hover:shadow-amber-200 '>
        <div className='justify-items-center text-2xl underline '><p>SSC</p></div>
        <li className='pl-5 text-xl'><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'>Class :  </span> 10</li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'>Board :  </span> TG Board of Secondary Education  </li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'> School :  </span> Govt. High School</li>
        <li className='pl-5 text-xl  '><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'>Acadamic Year :  </span> 2017 - 2018</li>
        <li className='pl-5 text-xl '><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'>Place :  </span> T.B Palem</li>
        <li className='pl-5 text-xl'><span className='text-yellow-600  p-1.5 mr-2 rounded-3xl'>GPA :  </span> 7.5</li>
       
      </div></motion.div>
       </div>
   
  )
}

export default Education