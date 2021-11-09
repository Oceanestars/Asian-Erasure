import React from 'react';
import "./style.css";

export const Home = () => {
    return(
      <div style={{width:"100%"}}>
        <div id="jumbotronStyle">
        <span className="topHeader">Homepage</span>

          <h2>Welcome to Asian Erasure</h2>
          <p className="bodyJumbotron">The stories that we tell matter. Throughout the history of film in the United States of America, Asian and Pacific Islander 
            communities have been flattened and erased on film. Often played by white actors or hideously caricatured, cultures have been made into laughing stocks or demonized. 
            Read about <span><a id="NavOverride" href="../Pitfalls/Pitfalls.js">pitfall</a></span> in representation and the <span><a id="NavOverride" href="../Trailblazers/Trailblazers.js">trailblazers</a></span> within the AAPI community lighting the way to a more inclusive future.<br></br>
          </p>
        </div>
      </div>
    );
  };
   