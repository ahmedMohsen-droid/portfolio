import React from "react";
import './Aboutcontent';
import ahmed from '../assets/343398868_996945178145086_1408122242409853265_n.jpg';
import myCv from '../assets/my-cv.pdf'
import './Aboutcontent.css'
const Aboutcontent = () => {
    return(
        <div className="aboutcontent">
            <div className="left">
                <h1>who I'am ?</h1>
                <div className="my-image">
                  <img src={ahmed} alt="my-image"/>
                </div>
                <p>I am react front-end developer . I create responsive secure websites for my clients</p>
                <a href={myCv} className="btn" download>MY CV</a>
            </div>
            <div className="right">
                <div className="container">
                    <h1>My Skills</h1> 
                    <p>Html</p>
                     <div className="row">
                         <div className="skill Html">
                           80%
                         </div>
                     </div>
                     <p>css</p>
                     <div className="row">
                         <div className="skill css">
                           70%
                         </div>
                     </div>
                     <p>javascript</p>
                     <div className="row">
                         <div className="skill javascript">
                           60%
                         </div>
                     </div>
                     <p>react js</p>
                     <div className="row">
                         <div className="skill react">
                           70%
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutcontent;