import React from "react";
import trailblazersStyles from '../styles/trailblazers.module.css'

const Jumbotron = (props) => {
  return (
    <div id={trailblazersStyles.jumbotronStyle}> 

        <div className={trailblazersStyles.HeaderBox}>
          <span className={trailblazersStyles.topHeader}>{props.topHeader}</span>
          <br />
          <h2 style={{color:"black",   marginTop: "26px"}}> {props.header}</h2>
          <p className={trailblazersStyles.bodyJumbotron} style={{fontSize:"1.2vw"}}>{props.body}</p>
          </div>
    </div>
  );
};

export default Jumbotron;
