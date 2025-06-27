import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
    <nav className='flex bg-purple-100 h-10 '>
        <ul className='flex gap-5 justify-center items-center mx-5'>
         <Link href='/'><li>Home</li></Link>
         <Link href='/about'><li>About</li></Link>
         <Link href='/contect'><li>Contect</li></Link>
         <Link href='/bitlinks'><li>Bitlinks App</li></Link>
         <Link href='/apidata'><li>Url List</li></Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar