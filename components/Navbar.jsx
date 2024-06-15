import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' flex flex-row justify-between items-center bg-green-400'>
      <ul className=' flex flex-row justify-between items-center'>
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

    </div>
  )
}

export default Navbar