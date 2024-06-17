import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 rounded-lg hidden w-full bg-neutral-900/60 p-6 backdrop-blur-lg sm:block">
        <nav className="flex items-center flex-wrap">
            <Link href="" className="flex font-bold text-lg text-white mr-6">Tate Ewing</Link>
            <Link href="/#about" className="flex font-bold text-lg text-white mr-6">About</Link>
        </nav>
    </header>
  )
}

export default NavBar