import React from 'react'
import {Link} from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";
function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/cart'><FaCartPlus className='img'/></Link>

    </div>
  )
}

export default Navbar