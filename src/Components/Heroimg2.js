import './Heroimg2.css';

import React from "react";


const Heroimg2 = (props) => {
    return(
        <div className='Hero2'>
            <div className='mask2'>
              <div className='content2'>
               <h1>{props.heading}</h1>
               <p>{props.text}</p>
              </div>
            </div>

        </div>
    )
}

export default Heroimg2;