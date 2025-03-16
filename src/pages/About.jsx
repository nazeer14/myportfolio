import React from 'react'

function About() {
  return (
    <>
    <div className='menu bg-black justify-around lg:mx-20 my-10 p-10 rounded-2xl shadow-xl shadow-fuchsia-600 hover:shadow-indigo-400 hover:scale-101 '>
      <h1 className='text-red-500 text-2xl'>About Me</h1>
      <p className=' text-xl p-3 '>
      Hi, I'm Nazeer! I'm a passionate web developer specializing in building dynamic and user-friendly web applications. 
      With a strong foundation in Java, Spring Boot, JSP, and React.js, I love crafting seamless user experiences and efficient backends.<br/><br/>
      I am currently working on a comprehensive website that integrates search functionality for local tourism places, hotels, and restaurants. <br/><br/>
      My focus is on developing scalable, responsive, and interactive applications while ensuring clean code and modern design practices.
      </p>
      <h1 className='text-red-500 text-2xl'>Skills:</h1>
      <div className='flex p-2 pl-5 gap-5 lg:text-xl'>
      <ol>
      <li><strong className='text-purple-700'>Frontend : </strong> HTML, CSS, JavaScript, React.js, JSP</li>
      <li><strong className='text-purple-700'>Backend : </strong> Java, Spring Boot, Servlets</li>
      <li><strong className='text-purple-700'>Database : </strong> SQL, JDBC</li>
      <li><strong className='text-purple-700'>Other :</strong> MVC architecture, REST APIs</li>
      </ol>
      </div>
      <h1 className='text-red-500 text-2xl'>What Drives Me:</h1>
      <p className=' lg:text-xl'>
      I enjoy solving complex problems and transforming ideas into reality through code. My approach involves writing maintainable, efficient, and scalable code while staying up-to-date with the latest web development trends.
      </p>
        <h1 className='text-red-500 text-2xl p-1'>Let's Connect:</h1>
      <p className=' lg:text-xl'>

      I'm always excited to collaborate on new projects and expand my skill set. Feel free to reach out and let's build something amazing together!
      
      </p>
    </div>
    </>
  )
}

export default About