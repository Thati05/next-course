import Link from 'next/link'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">Main login</Link>
        </li>
        <li>
          <Link href="/login/user">User</Link>
        </li>
        <li>
          <Link href="/login/admin">Admin</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default Layout