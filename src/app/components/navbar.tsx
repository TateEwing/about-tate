import React from 'react'

const NavBar = () => {
  
  return (
    <header id="header" className="fixed top-0 z-50 rounded-lg w-full bg-neutral-800/20 backdrop-blur-lg p-6 sm:block">
        <nav className="flex items-center flex-wrap">
            <a href="#landing" className="flex font-bold text-lg text-white mr-6">Tate Ewing</a>
            <a href="#about" className="flex font-bold text-lg text-white mr-6">About</a>
            <a href="#resume" className="flex font-bold text-lg text-white mr-6">Resume</a>
            <a href="#testimonials" className="flex font-bold text-lg text-white mr-6">Testimonials</a>            
        </nav>
    </header>
  )
}

export default NavBar