import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

function Contact() {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/pup", { state: { message: [name] } })
  }

  return (
    <div className="menu pb-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-blue-600 text-3xl lg:text-5xl text-center font-semibold mb-8">Get in Touch</h1>

      <div className="grid lg:grid-cols-2 gap-8 ">
        {/* Left: Contact Info */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500  p-6 lg:p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl underline text-yellow-100 mb-6">Contact Us</h2>

          <div className="space-y-6 text-lg items-start">
            <div className="flex items-center">
              <span className="text-black ">
                📍
              </span>
              <span className="text-black font-semibold mr-2">Address:</span>
              Hyderabad, Telangana
            </div>

            <div className="flex items-center">
              <span className="text-black ">📞</span>
              <span className="text-black font-semibold mr-2">Call:</span>
              8008398263
            </div>

            <div className="flex items-center">
              <span className="text-black">📧</span>
              <span className="text-black font-semibold mr-2">Mail:</span>
              shaiknazeer141914@gmail.com
            </div>

            <div className="flex gap-4 pt-4">
              <SocialIcon url="https://github.com/nazeer14" target="_blank" />
              <SocialIcon url="https://linkedin.com/in/nazeer-shaik14" target="_blank" />
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className=" bg-opacity-10 backdrop-blur-sm border border-gray-200 p-6 lg:p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl text-purple-500 font-semibold underline mb-6">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-lg mb-1 ">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg  bg-opacity-20  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg mb-1 ">Company</label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full p-3 rounded-lg  bg-opacity-20  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg mb-1 ">Email</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full p-3 rounded-lg  bg-opacity-20  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg mb-1 ">Phone</label>
              <input
                type="text"
                placeholder="XXXXXX123"
                className="w-full p-3 rounded-lg  bg-opacity-20  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-lg mb-1 ">Message</label>
              <textarea
                placeholder="Write your message here..."
                className="w-full h-32 p-3 rounded-lg  bg-opacity-20  border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700  font-semibold py-3 rounded-lg transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
