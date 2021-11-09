import React from "react";
import "./Trailblazers/css/style.css";

const Jumbotron = (props) => {
  return (
    <div id='jumbotronStyle'> 

        <div className="HeaderBox">
          <span className="topHeader">{props.topHeader}</span>
          <br />
          <h2 style={{color:"black",   marginTop: "26px"}}> {props.header}</h2>
          <p className="bodyJumbotron" style={{fontSize:"1.2vw"}}>{props.body}</p>
          </div>
    </div>
  );
};

export default Jumbotron;
