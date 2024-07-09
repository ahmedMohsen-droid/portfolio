import './Navbar.css'
import React, { useState } from "react";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
const Navbar = () => {
    const [click,setClick ] = useState(false);
    const [bg,setbg] = useState(false);
    const handleClick = () => setClick(!click);
    const changebg = () => {
        if(window.scrollY >= 100){
            setbg(true)
        }else{
            setbg(false)
        }
    }
    window.addEventListener('scroll',changebg)
    return(
        <div className={bg?'header header-bg':'header'}>
            <Link to='/'>
                <h1>Portfolio</h1>
            </Link>
            <ul className={click?'nav-menu activate':'nav-menu'}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className='humburger'>
                {click?
                (<FaTimes onClick={handleClick} size={20} style={{color:'#fff'}} />):
                (<FaBars onClick={handleClick} size={20} style={{color:'#fff'}} />)}
             
             
            </div>
            
            
            

        </div>
    )
}

export default Navbar;
