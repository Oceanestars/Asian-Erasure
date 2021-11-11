import React from 'react';
import Image from 'next/image'
import homeStyles from '../styles/home.module.css'
import headerPic from '../public/images/HeaderImage.png'

export default function Home (){
    return(
      <div id={homeStyles.welcomeBody} style={{width:"100%"}}>
        <div className={homeStyles.rowInline}>
        <Image src={headerPic} alt="me" width="720" height="230" />
        </div>
          <h2>We are more than what you think</h2>
          <p className={homeStyles.bodyJumbotron}>The stories that we tell matter. Throughout the history of film in the United States of America, Asian and Pacific Islander 
            communities have been flattened and erased on film. Often played by white actors or hideously caricatured, cultures have been made into laughing stocks or demonized. 
            Read about <span><a id={homeStyles.NavOverride} href="../Pitfalls/Pitfalls.js">pitfall</a></span> in representation and the <span><a id="NavOverride" href="../Trailblazers/Trailblazers.js">trailblazers</a></span> within the AAPI community lighting the way to a more inclusive future.<br></br>
          </p>
          <div className={homeStyles.rowInline}>
            <div className= {homeStyles.customCard} id={homeStyles.trailblazersCard}>
              <h3>Trailblazers</h3>
              <p>Many Asians have done tremendous work in the Movie and TV industry. Actors, Actress, directors, filmakers, animators, and many more deserve to be recognized for their iconic work in this space. </p>
             <div className={homeStyles.button} id={homeStyles.trailblazersButton}>
                <a href="../Trailblazers/Trailblazers.js">
                    More about Asian Creators
                </a>
              </div>
            </div>

            <div className={homeStyles.customCard} id={homeStyles.pitfallsCard}>
              <h3>Pitfalls</h3>
              <p>The film industry had many shocking Asian representation through the years. Check out the Pitfalls page to see how the AAPI community has been represented throughout the history in Hollywood.</p>
             <div className={homeStyles.button} id={homeStyles.pitfallsButton}>
                <a className={homeStyles.linkButton} href="../Pitfalls/Pitfalls.js">
                    More about Pitfalls
                </a>
              </div>
            </div>

            <div className={homeStyles.customCard} id={homeStyles.aboutCard}>
              <h3>About us</h3>
              <p>Seeing talented asian actors being mistreated and marginalized in Hollywood, we felt compelled to create this project to appreciate their amazing works and contradict discrimination in the industry. </p>
             <div className={homeStyles.button} id={homeStyles.aboutButton}>
                <a className={homeStyles.linkButton} href="../About/AboutUs.js">
                    More about Us
                </a>
              </div>
            </div>

          </div>
      </div>
    );
  };
   