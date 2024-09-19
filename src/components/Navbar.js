import React,{useState} from 'react';
import {NavLink,Link} from 'react-router-dom'

const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false)
    return (
        <nav>
            <div onClick={()=>{setMenuOpen(!menuOpen)}} className='menu'>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <Link to='/' className='title'>Website</Link>
            <ul className={menuOpen ? 'open' : ''}>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/Services">Services</NavLink></li>
            </ul>
            
        </nav>
    );
};

export default Navbar;