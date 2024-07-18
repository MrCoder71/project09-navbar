import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <header>

    <div > <a href='#home' class="logo"> MY<span>Portfolio </span> </a> </div>

    <input type="checkbox" id="nav_check" hidden />

    <nav>

        <ul>
            <li> <a href="#home" > Home </a> </li>

            <li> <a href="#about"> About </a> </li>

            <li> <a href="#education"> Education </a> </li>

            <li> <a href="#skills"> Skills </a> </li>

            <li> <a href="#project"> Project </a> </li>

            <li> <a href="#contact"> Contact </a> </li>

        </ul>

    </nav>

    <label for="nav_check" class="hamburger">

        <div></div>
        <div></div>
        <div></div>

    </label>
    
</header>
  )
}

export default Navbar