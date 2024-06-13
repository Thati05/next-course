import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul className=' flex justify-around'>
        <div>
          <h1 className=' text-center'>
            Logo
          </h1>
        </div>
        <div>
          <Link className=' list-none m-3 ' href='/'>Home</Link>
          <Link className=' list-none m-3 ' href='/about'>About</Link>
          <Link className=' list-none m-3 ' href='/portfolio'>portfolio</Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar