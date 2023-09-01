import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Navbar = () => {
    let Links = [
        { name: 'HOME', link: '/' },
        { name: 'ABOUT', link: '/about' },
        { name: 'SHOP', link: '/shop' },
        { name: 'MEMBERSHIP', link: '/membership' },
        { name: 'CONTACT', link: '/contact' },
      ];

    let [open, setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex bg-white py-4 md:px-10 px-7 justify-between items-center'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-mallory 
      text-gray-800'>
            Minimalist
            </div>  
            <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
           <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
            {
                Links.map((Link)=>(
                    <li key={Link.name} className='ml-5 text-xl md:my-0 my-7'> 
                        <a href="{Link.link}">{Link.name}</a>
                    </li>
                ))
            }
            <button type='submit' className='mx-5 bg-black hover:bg-gray-800 text-white font-bold py-2 px-5'>LOG IN</button>

           </ul>
        </div>

    </div>
  )
}

export default Navbar