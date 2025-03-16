import React from 'react'
import java from '../images/491909.jpg'
import javaee from '../images/tutorial-java-ee-logo.png'
import js from '../images/jscss.jpeg'
import react from '../images/react logo.jpeg'
import spring from '../images/spring logo.jpeg'
import sql from '../images/sql1.jpeg'
import git from '../images/git.jpeg'
import github from '../images/github.jpeg'
import jira from '../images/Jira-Symbol.png'
import pm from '../images/postman-600на400.png'



function Skills() {
  return (
    <div className='m-2'>
      <div className=' menu text-center mb-4 rounded-2xl text-2xl p-1 border-1'>Programming Languages</div>
      <nav className='grid lg:grid-cols-3 grid-cols-2 gap-10 justify-items-center '>
      <img src={java} alt='java se' className='w-full h-full rounded-2xl'></img>
        <img src={javaee} alt='java ee' className='w-full h-full rounded-2xl  '/>
        <img src={js} alt='js' className='w-full h-full rounded-2xl' />
        <img src={sql} alt='sql'className='w-full h-full rounded-2xl '/>
        <img src={react} alt='react'className='w-full h-full rounded-2xl'/>
        <img src={spring} alt='spring boot' className='w-full h-full rounded-2xl '/>

      </nav>
      <div className='menu text-center mb-4 rounded-2xl text-2xl p-1 mt-5 border-1'>Tools</div>
      <nav className='grid lg:grid-cols-3 grid-cols-2 gap-10 justify-items-center '>
        <img src={git} alt='git' className='w-full h-full rounded-2xl'/>
        <img src={github} alt='github'className='w-full h-full rounded-2xl'/>
        <img src={pm} alt='postman'className='w-full h-full rounded-2xl'/>
        <img src={jira} alt='jira'className='w-full h-full rounded-2xl'/>
      </nav>
    </div>
  )
}

export default Skills