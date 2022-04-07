import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <Link to="/">
        <div className='navbar'>
            <h1>Coin Watch</h1>
        </div>
    </Link>
  )
}

export default Navbar