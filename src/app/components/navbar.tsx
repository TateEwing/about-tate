import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 rounded-lg w-full bg-neutral-800/20 backdrop-blur-lg p-6 sm:block">
        <nav className="flex items-center flex-wrap">
            <Link href="/#landing" className="flex font-bold text-lg text-white mr-6">Tate Ewing</Link>
            <Link href="/#about" className="flex font-bold text-lg text-white mr-6">About</Link>
        </nav>
    </header>
  )
}

export default NavBar