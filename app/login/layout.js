import React from 'react'
import Navbar from '../components/Navbar'
const layout = ({ childern }) => {
  return (
    <div>
      <Navbar />
      {childern}
    </div>
  )
}

export default layout