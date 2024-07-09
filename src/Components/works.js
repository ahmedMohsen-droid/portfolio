import React from "react";
import './works.css';
import workdata from "./workdata";
import Workcard from "./workcard";
const Works = () => {
    return(
        <div className="work-container">
          <h2 className="project-heading">Projects</h2>
          <div className="project-container">
            {
              workdata.map((val,index)=>(
               <Workcard key={index} imgsrc={val.imgsrc} title={val.title} text={val.text} url={val.url} />
              ))
            }
          </div>
        </div>
    )
}

export default Works;