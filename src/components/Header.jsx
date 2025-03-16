import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import profilephoto from '../images/profilephoto.jpg'
import './head.css'
import FallingHearts from './FallingHearts'

function Header() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  };

  //likes
  const [showHearts, setShowHearts] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false); 
  
  const handleLike = () => {
    setShowHearts(true);
    setShowThankYou(true);
    
    setTimeout(() => {
      setShowHearts(false);
      setShowThankYou(false);
    }, 1000);
  };

  const Button = ({ onClick, children }) => (
    <button onClick={onClick} className=" ">
      {children}
    </button>
  );
  
  const Like = ({ onLike }) => (
    <div className="lg:text-2xl items-center lg:pt-0 pt-2 ">
      <Button onClick={onLike} className=""><span className='lg:text-2xl  hover:text-red-500'>Like</span>❤️</Button>
    </div>
  );
  
  return (
    <>
    <div  >
      <nav className='div flex lg:gap-28  lg:justify-around lg:pr-30  justify-around border-2  border-cyan-800 bg-white rounded-3xl py-1 mt-2 lg:font-bold'>
        <Link to='' ><img src={profilephoto} alt='photo' className='h-11 rounded-4xl w-11'/></Link>
        <Link to='' className='hover:text-blue-500 lg:text-2xl  pt-2 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</Link>
        <Link to='/about' className='hover:text-blue-500 lg:text-2xl lg:pt-0 pt-2'>About</Link>
        <Link to='/contact' className='hover:text-blue-500 lg:text-2xl lg:pt-0 pt-2'>Contact</Link>

        <div className="flex flex-row">
        <Like onLike={handleLike} />
        {showThankYou && <p className=" lg:text-3xl lg:pt-0 pt-2">🤝</p>}
        <FallingHearts showHearts={showHearts} />
        </div>
        
        <button  className='btn2 px-2' onClick={toggleTheme}> {theme === "dark" ? "Light☀️" : "Dark🌙"} </button>
         
      
      </nav>
    </div>
    
    
    </>
  )
}


export default Header

//<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">

