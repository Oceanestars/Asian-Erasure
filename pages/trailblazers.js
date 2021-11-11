import React from "react";
import data from "../public/Static/dataPeople";
import PersonCards from "../components/personCards";
import Jumbotron from "../components/jumbotron";
import trailblazersStyles from '../styles/trailblazers.module.css'
const bodyText = "Many Asians have done tremendous work in the Movie and TV industry. Actors, Actress, directors, filmakers, animators, and many more deserve to be recognized for their iconic work in this space. Below are cards that are an homage to their work. Feel free to browse through the different cards and click on them to learn more!";

export default function Trailblazers () {
  return (
    <div>
      <div id={trailblazersStyles.explanationTrailblazer}>
        <Jumbotron topHeader={"Hall of Fame"} header={"Asian Trailblazers"} body={bodyText} />
      </div>
      <div>
        <ul id={trailblazersStyles.trailblazer}>
          {data.map((item) => (
            <li>
              <PersonCards data={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
