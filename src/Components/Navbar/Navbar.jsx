import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { RiNotification2Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

function Navbar() {
  return (
    <nav>
      <ul className='nav-ul-pc'>
        <NavLink className={'logo'} to={'/'}>
           <span>crypter</span>
        </NavLink>
        |
        <NavLink>Discover</NavLink>
        <NavLink>How to work</NavLink>
      </ul>
      <ul className='nav-ul-pc'>
        <li>
          <input type="text" />
          <IoSearchSharp className='search-icons' />
        </li>
        <NavLink><RiNotification2Line /></NavLink>
        <NavLink><button className='nav-btn-1 nav-btn'>Upload</button></NavLink>
        <NavLink><button className='nav-btn-2 nav-btn'>Connect Wallet</button></NavLink>
      </ul>

      <ul className='nav-ul-mobile'>
        <NavLink className={'logo'} to={'/'}>
           <span>crypter</span>
        </NavLink>
        <button className='btn-menu'>=</button>
      </ul>
    </nav>
  )
}

export default Navbar