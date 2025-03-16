import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './theme.css'

function Menu() {
  return (
    <>
    <div className='flex  lg:flex-row w-fit  gap-5 '>
      <div>
        <div className=' menu flex lg:flex-col flex-none w-full lg:gap-1 lg:py-2 py-1 lg:px-3 lg:m-2 lg:justify-items-normal  justify-around   display-1  lg:text-2xl  rounded-2xl shadow-md shadow-fuchsia-900 hover:shadow-amber-500 lg:h-100 lg:w-50 max-w-full'>
          <div className='menu rounded-xl p-1 m-1 lg:text-center '>Dashboard</div>
          <Link to='/' className='flex flex-row lg:gap-3 hover:text-green-500 rounded-xl p-1 text-blue-600 '>Home</Link>
        <Link to='/education' className='flex flex-row lg:gap-3 hover:text-green-500 rounded-xl p-1 text-blue-600 '>Academics<span className='lg:pt-2  '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg></span></Link>
        <Link to='/skills'className='flex lg:gap-3 hover:text-green-500 rounded-xl p-1 text-blue-600 '>Skills
</Link>
        <Link to='/projects' className='hover:text-green-500 rounded-xl p-1 text-blue-600'>Projects</Link>
        <Link to='/certificates'className='hover:text-green-500 rounded-xl p-1 text-blue-600'>Certificates</Link>
        <Link to='/hobbies' className='hover:text-green-500 rounded-xl p-1 text-blue-600'>Resume</Link>
        <Link to='/oraai' className='hover:text-green-500 rounded-xl p-1 text-blue-600'>OraAI</Link>

        </div>
        <div>
          <Link to='/oraai' className=' text-blue-700 '><img src='robot.png' alt='OraAI' className='lg:pl-10  lg:h-20 lg:w-30 h-10 w-10 '/></Link>
        </div>
      </div>
      <div className='flex lg:flex-col justify-items-start py-2.5 px-3 rounded-3xl text-white m-3 '><Outlet/></div>
      </div>

    </>

  )
}

export default Menu