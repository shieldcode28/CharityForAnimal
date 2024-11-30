import React,{useState, useEffect} from 'react'
import ResponsiveMenu from './ResponsiveMenu';
import { FaCaretDown } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router';

const Navbar = () => {
  const [theme , setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [showMenu , setShowMenu] = useState(false);
  const element = document.documentElement;

     const toggleMenu = ()=>{
      setShowMenu(!showMenu);
     };

  useEffect (()=>{
    if(theme=="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme" , "dark");
    }
    else{
      element.classList.remove("dark");
      localStorage.setItem("theme" , "light");
    }
  }, [theme])
  return (
    <>
      <nav className='bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white fixed top-left-0 w-full border-b-[1px] border-primary/50'>
        <div className=" container ">
            <div className='flex items-center justify-between h-[90px] md:h-[100px] py-2'>
                {/* Logo Section*/ }
                <div className='text-2xl md:text-3xl uppercase '>
                    <a href="#">CHARITY <span>For</span> <span className='inline-block font-bold text-primary'>Animals</span></a>
                </div>
                {/* desktop  menu Section*/ }
                    <div className=' hidden md:block text-sm md:text-xl  flex-row gap-3 text-center ml-24'>
                        <ul className='flex items-center gap-10'>
                            <li className='group relative cursor-pointer'>
                                <a href="#" className='flex items-center gap-[2px] h-[72px]'>
                                    <Link to="/">HOME{""}</Link>
                                      <span>
                                      <FaCaretDown className='group-hover:rotate-180 transition-all duration-200' />
                                      </span>
                                </a>
                                {/* DropDown Section */}
                                      <div className='absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block '>
                                            <ul className='space-y-3'>
                                             <Link to="/Services"><li className='p-2 hover:bg-violet-200'>Services</li></Link> 
                                              <Link to="/Gallery"><li className='p-2 hover:bg-violet-200'>Gallery</li></Link>
                                              <Link to="/Privacy"><li className='p-2 hover:bg-violet-200'>Privacy Policy</li></Link>
                                            </ul>
                                      </div>
                            </li>
                            <Link to="/About"><li>About us</li></Link>
                            <li>
                              <div className='flex items-center gap-4'>
                                {/*icon here */}
                                <div>
                               <Link to="/Call"><BiPhoneCall  className='text-2xl h-[40px] w-[40px] rounded-md text-white bg-primary hover:bg-primary/90 p-2'/></Link> 
                                </div>
                                {/*Mobile no. */}
                                <div>
                                        <p>Talk To US</p>
                                        <p>+91 8923500783</p>
                                </div>
                              </div>
                              </li>
                              {/* Light And Dark Mode Switcher */}
                               {theme == "dark" ? (
                                <BiSolidSun
                                className='text-2xl'
                                onClick={()=>setTheme("light")}
                                />
                               ):( <BiSolidMoon
                                className='text-2xl'
                                onClick={()=>setTheme("dark")}
                                />
                                )} 
                        </ul>
                    </div>
                {/* Mobile Section*/ }
                <div className='md:hidden flex items-center gap-4'>
                {theme == "dark" ? (
                                <BiSolidSun
                                className='text-2xl'
                                onClick={()=>setTheme("light")}
                                />
                 ):(
                                <BiSolidMoon
                                className='text-2xl'
                                onClick={()=>setTheme("dark")}
                                />
                  )} 
                  {showMenu ?(
                        <HiMenuAlt1 
                        onClick={toggleMenu}
                        className='cursor-pointer transition-all'
                        size={30}
                        />
                  ) :(
                    <HiMenuAlt3 
                    onClick={toggleMenu}
                    className='cursor-pointer transition-all'
                    size={30}
                    />
                  )
                  }
                </div>
            </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  )
}

export default Navbar;

