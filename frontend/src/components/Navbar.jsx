import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import '../home/BannerCard.css'


const Navbar = () => {
    const [isMenuopen ,setIsMenuopen] =useState(false);
    const [isSticky ,setIsSticky] = useState(false);

    const toggleMenu =() =>{
        setIsMenuopen(!isMenuopen);
    }

    useEffect(()=>{
        const handleScroll =() =>{
            if(window.scrollY >100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll",handleScroll);

        return()=>{
            window.addEventListener("scroll",handleScroll);
        }
    },[])

    const navItems = [ 
        {link : "Home", path:'/'},
        {link : "About", path:'/about'},
        {link : "Store", path:'/store'},
        {link : "Login ", path:'/login'},
       
    ]
    return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300 ": ""} `} >
            <div className='flex justify-between'>
                {/* logo */}
                <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2' id='main'><FaBlog className='inline-block'/>InventoryIQ</Link>

                {/* nav items*/}

                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path})=> <Link key={path} to ={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link> )
                    }
                </ul>

                {/* Button for large devices*/ }

                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className ='w-5 hover:text-blue-700' /></button>
                </div>

                {/*  Menu Button for small devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuopen ? <FaXmark className='h-5 w-5 text-black' /> :<FaBarsStaggered 
                            className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>
            </div>
            {/*Small devices */}
                        
            <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuopen ? "block fixed top-0 left-0 right-0 ":"hidden"}`}>
                     {
                        navItems.map(({link,path})=> <Link key={path} to ={path} className='block text-base text-white uppercase cursor-pointe '>{link}</Link> )
                    }
            </div>
        </nav> 
    </header>
  )
  
}

export default Navbar
