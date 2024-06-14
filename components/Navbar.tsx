import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href='/login'>Login Main</Link>
        </li>
        <li>
          <Link href='/login/user'>User</Link>
        </li>
        <li>
          <Link href='/login/admin'>Admin</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar