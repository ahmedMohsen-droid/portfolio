import './Heroimg.css';

import React from "react";
import {Link} from "react-router-dom";

const Heroimg = () => {
    return(
        <div className='Hero'>
            <div className='mask'>
                <div className='content'>
                  <p>HI, I'M FREELANCER</p>
                  <h1>React Developer</h1>
                  <Link to='/projects' className='btn'>PROJECTS</Link>
                  <Link to='/contact' className='btn btn-light'>CONTACT</Link>
                </div>
            </div>

        </div>
    )
}

export default Heroimg;