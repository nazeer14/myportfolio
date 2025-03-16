import React, {Navigate}from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import PopupPage from './pages/popuppage'
import Menu from './components/Menu'
import OraAI from './components/OraAI'

function App() {
  return (
    <div className='w-full h-screen flex flex-col'>
    <div className='w-full top-0 fixed '><Header/></div>
    <div className='flex flex-1 lg:flex-row flex-col lg:pt-16'>
    <aside className="w-1/4 fixed left-4 top-16 h-[calc(100vh-4rem)]">
    <Menu/>
    </aside>
    <main className="flex-1 lg:ml-[25%] h-[calc(100vh-8rem)] overflow-x-hidden">
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/certificates' element={<Certificates/>}/>
        <Route path='/Hobbies' element={<Hobbies/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/pup' element={<PopupPage/>}/>
      <Route path='/oraai' element={<OraAI/>}/>
    </Routes>
        </main>
    </div>
    <footer className="w-full text-center bg-transparent fixed bottom-0">
    <Footer/>
      </footer>
   
    </div>
  )
}

export default App