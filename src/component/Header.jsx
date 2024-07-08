import "../App.css"
import { FaRegHeart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";



function Header() {
    const [open, setOpen] = useState(false)

  return (
    <div className='flex w-[100%] space-x-[00px] sm:justify-between lg:sticky lg:top-0 lg:z-[20]' id="header-bg">
        <div className='lg:w-[30%]'>
                <div className='lg:pl-[80px] w-[50px]'>
                    <h1 className='text-2xl font-bold text-[#ece8e8] font-serif'>
                        REFUGEE RELOCATION UNIT
                    </h1>
                </div>
            </div>
        <nav className=' hidden lg:flex lg:h-[100px] lg:justify-between lg:w-[70%]' >
            <div className=' space-x-4 h-[50px] py-8 font-bold text-white p-[150px]'>
                <Link spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-600 cursor-pointer' to="home">HOME</Link>
                <Link spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-600 cursor-pointer' to="about">ABOUT</Link>
                <Link spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-600 cursor-pointer' to="service">SERVICE</Link>
                <Link spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-600 cursor-pointer' to="contact">CONTACT US</Link>
            </div>
            <div className='w-[30%] flex justify-center font-bold bg-[#23487f] rounded-l-[50px]'>  
                <h1 className='py-8 text-white flex flex-row hover:text-yellow-400'><span className="text-[30px] pr-3 text-yellow-400">< FaRegHeart/></span>DONATE NOW</h1>
            </div>
        </nav>

        {/* smallscreen */}  
        <button onClick={()=> setOpen(!open)} className="flex items-center justify-center border-b-red-300 pl-[280px]  h-[25px] pt-[50px] lg:hidden">
            <IoMenu className="text-[50px] " /> 
        </button>
        <div onClick={()=> setOpen(!open)} className={`fixed lg:hidden top-0 w-full bg-black z-[20] ${ open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></div>
        <div className={`fixed lg:hidden left-0 top-0 w-[300px] h-[500px] overflow-auto z-[30] bg-[#e8e8e8] transition-all duration-200 ${open ? "translate-x-[0px]" : "translate-x-[-500px]"}`}>
            <nav className="flex flex-col items-center gap-10 pt-20 bg-transparent">
                <div className='font-bold text-[#1f1c1c] text-xl flex flex-col space-y-[50px] '>
                <Link spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-600 cursor-pointer' to="home">HOME</Link>
                <Link spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-600 cursor-pointer' to="about">ABOUT</Link>
                <Link spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-600 cursor-pointer' to="service">SERVICE</Link>
                <Link spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-600 cursor-pointer' to="contact">CONTACT US</Link> 
                </div>
                {/* <div className='w-[80%] bg-[#6c91b3] rounded-full flex justify-center font-bold'> 
                    <h1 className='py-8 text-white flex flex-row hover:text-yellow-400'><span className="text-[30px] pr-3 text-yellow-400">< FaRegHeart/></span>DONATE NOW</h1>
                </div> */}
            </nav>
        </div>
    </div>
  ) 
}

export default Header