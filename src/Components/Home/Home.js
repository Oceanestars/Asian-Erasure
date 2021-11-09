import React from 'react';
import "./style.css";
import headerImage from "../../Assets/Images/HeaderImage.png";

export const Home = () => {
    return(
      <div id="welcomeBody" style={{width:"100%"}}>
        <div className="rowInline">
          <img width="65%"src={headerImage} alt="Decorative"></img>
        </div>
          <h2>We are more than what you think</h2>
          <p className="bodyJumbotron">The stories that we tell matter. Throughout the history of film in the United States of America, Asian and Pacific Islander 
            communities have been flattened and erased on film. Often played by white actors or hideously caricatured, cultures have been made into laughing stocks or demonized. 
            Read about <span><a id="NavOverride" href="../Pitfalls/Pitfalls.js">pitfall</a></span> in representation and the <span><a id="NavOverride" href="../Trailblazers/Trailblazers.js">trailblazers</a></span> within the AAPI community lighting the way to a more inclusive future.<br></br>
          </p>
          <div className="rowInline">
            <div className="customCard" id="trailblazersCard">
              <h3>Trailblazers</h3>
              <p>Many Asians have done tremendous work in the Movie and TV industry. Actors, Actress, directors, filmakers, animators, and many more deserve to be recognized for their iconic work in this space. </p>
             <div className="button" id="trailblazersButton">
                <a href="../Trailblazers/Trailblazers.js">
                    More about Asian Creators
                </a>
              </div>
            </div>

            <div className="customCard" id="pitfallsCard">
              <h3>Pitfalls</h3>
              <p>The film industry had many shocking Asian representation through the years. Check out the Pitfalls page to see how the AAPI community has been represented throughout the history in Hollywood.</p>
             <div className="button" id="pitfallsButton">
                <a className="linkButton" href="../Pitfalls/Pitfalls.js">
                    More about Pitfalls
                </a>
              </div>
            </div>

            <div className="customCard" id="aboutCard">
              <h3>About us</h3>
              <p>Seeing talented asian actors being mistreated and marginalized in Hollywood, we felt compelled to create this project to appreciate their amazing works and contradict discrimination in the industry. </p>
             <div className="button" id="aboutButton">
                <a className="linkButton" href="../About/AboutUs.js">
                    More about Us
                </a>
              </div>
            </div>

          </div>
      </div>
    );
  };
   