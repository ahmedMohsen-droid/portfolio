import React from "react";
import './works.css';

import { NavLink } from "react-router-dom";

const Workcard = (props) => {
    return(
        <div className="project-card">
               <img src={props.imgsrc} alt="image"/>
               <h3 className="Project-title">{props.title}</h3>
               <div className="project-details">
                 <p>{props.text}</p>
                 <div className="pro-btn">
                   <NavLink to={props.url} className='btn'>View</NavLink>
                   <NavLink to="url.com" className='btn'>source</NavLink>
                 </div>
               </div>
            </div>
    )
}

export default Workcard;