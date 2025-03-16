import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import {SocialIcon} from 'react-social-icons'

function Contact() {
  const navigate=useNavigate()
  const [name, setName] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/pup",{ state:{ message :[name] }});
  }
  return (
    <div className='menu pb-4 '>
      <p className='text-blue-600 lg:text-5xl text-3xl text-center'>Get in Touch</p>
      <div className='grid lg:grid-cols-2 lg:h-auto lg:w-auto text-white '>
      <div className=' inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 text-white m-4 rounded-2xl lg:p-7 p-3'> 
      <p className='text-2xl text-yellow-100 underline pb-4'>Contact us </p>
      <p></p>
      <h2 className='flex p-2 text-2xl '>
       <span className='text-black m-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
</span><span className='text-black  font-semibold mr-2'>Address : </span>
Hyderabad, Talangana.
      </h2>
      <h2 className='flex p-2 text-2xl  '>
       <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" pt-1 m-1 size-6 text-black">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
</svg></span>
<span className='text-black font-semibold mr-2'>Call :  </span>  8008398263
      </h2>
      <h2 className='text-white flex p-3 text-xl' >
      <span className=' p-1 text-black  '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
  <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
</svg></span>
<span className='text-black font-semibold mr-2'>Mail :  </span> shaiknazeer141914@gmail.com</h2>
      <SocialIcon url='https://github.com/nazeer14' className='m-3'/><SocialIcon url='www.linkedin.com/in/nazeer-shaik14'/>
      </div>
      <div className='menu m-4  lg:px-15 px-10 py-5 rounded-2xl border-2'>
        <h1 className='text-2xl underline text-purple-500 pb-5'>Send message</h1>
        <form onSubmit={handleSubmit} className=' gap-10 '>
        <label className='lg:p-3 text-lg m-2'>Full Name</label> <input type='text'value={name} placeholder='Enter FullName' className=' text-white p-2 lg:mb-5 mb-3 border border-gray-600 rounded-lg text-lg' onChange={(e)=>setName(e.target.value)} required/><br/>
        <label className='lg:p-5 text-lg lg:pr-8 pr-6'>Company</label><input type='text'  placeholder='company name'className=' text-white p-2 rounded-xl lg:mb-5 mb-3 border border-gray-600  rounded-xl lg:mb-5 mb-3  text-lg'  required/><br/>
        <label className='lg:p-5 text-lg lg:pr-13 pr-10'>Mail Id</label><input type='text' placeholder='exapmle@mail.com'className=' text-white p-2 rounded-xl lg:mb-5 mb-3 border border-gray-600  p-2 rounded-xl lg:mb-5 mb-3 text-lg'  required/><br/>
        <label className=' text-lg lg:p-4 lg:pr-8 pr-5'>Phone no </label> <input type='text'  placeholder='XXXXXX123'className=' text-white p-2 rounded-xl lg:mb-5 mb-3 border border-gray-600 p-2 rounded-xl lg:mb-5 mb-3  text-lg' /><br/>
        <label className="block mb-2 text-lg font-medium">
        Message:
        <textarea
          placeholder="Write your message here..."
          className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
        <button className='bg-purple-500  py-1.5 px-3 text-xl justify-content-center rounded-xl'>Send</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact