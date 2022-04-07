import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <Link to="/">
        <div className='navbar'>
            <h1>CryptoSearch</h1>
        </div>
    </Link>
  )
}

export default Navbar