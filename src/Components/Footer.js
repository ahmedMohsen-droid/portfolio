import './Footer.css';
import {FaHome,FaPhone,FaFacebook,FaLinkedin,FaTwitterSquare} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <div className='Footer'>
            <div className='details'>
                <ul>
                    <li><FaHome size={20} style={{color:"#fff",marginRight:'20px'}}/> <span>3 Hassan Hafez street ,zaiton</span></li>
                    <li><FaPhone size={15} style={{color:"#fff",marginRight:'20px'}}/> <span>01009382175</span></li>
                    <li><BiLogoGmail size={20} style={{color:"#fff",marginRight:'20px'}}/> <span>ahmed.mohsen24558894@gmail.com</span></li>
                </ul>
            </div>
            <div className='about'>
              <h3>About Me</h3>
              <p>My name ahmed mohsen mohamed , FrontEnd Developer<br /> I enjoy discussing new projects and designs chanllenges</p>
              
            </div>
            <div className='social-icons'>
             <ul>
                <li><Link to='https://www.facebook.com/ahmed.mohsen.31508076'><FaFacebook size={40} style={{color:"#fff",marginRight:'20px'}}/></Link></li>
                <li><Link to='https://www.linkedin.com/in/ahmed-mohsen-699b73253/'><FaLinkedin size={40} style={{color:"#fff",marginRight:'20px'}}/></Link></li>
                <li><Link to='https://x.com/ahmedds87118691'><FaTwitterSquare size={40} style={{color:"#fff",marginRight:'20px'}}/></Link></li>
             </ul>
            </div>
        </div>
    )
}

export default Footer;