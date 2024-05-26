import { useState } from 'react'
import './Navbar.css'
import logo from '../..assets/logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>Campus</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar