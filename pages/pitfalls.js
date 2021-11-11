import React, { useState }  from "react";
import MovieCards from "../components/movieCards";
import data from "../public/Static/data";
import Jumbotron from "../components/jumbotron";
import pitfallsStyles from '../styles/pitfalls.module.css'


const bodyText = "The film industry had many shocking Asian representation through the year. There have been work containing white face, misrepresentation, and racism. Below is a timeline container past work that have fail to accuratly represent the AAPI community. Our goal is to inform so we can learn from our mistakes";

export default function Pitfalls () {
  var firstTimeline = [<iframe title="All movies timeline" src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Ugphq-UldTUr2h1yau_PtlkUir33sJGTygKj9luDi38&font=Default&lang=en&initial_zoom=2&height=650' width='90%' height='650' webkitallowfullscreen mozallowfullscreen allowFullScreen frameBorder='0'></iframe>
];
  const [currentTimeline, setTimeline] = useState(firstTimeline);
  const temp = "Relevant Movies \n";
  return (
    <div id={pitfallsStyles.wholeBody}>
        <Jumbotron topHeader={"Past Works"} header={"Asian Pitfalls"} body={bodyText} />
      <div id={pitfallsStyles.timeline} >{currentTimeline}</div>
      <h2 style={{ float: "left", fontFamily: "Nunito"}}>{temp}</h2><br/>
      <ul>
        {data.map((item) => (
          <li>
            <div onClick={() => {setTimeline(item.timeline); console.log("image was clicked");}} >
            <MovieCards data={item} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
