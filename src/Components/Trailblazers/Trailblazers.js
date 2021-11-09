import React from "react";
import data from "../../Static/dataPeople";
import PersonCards from "./PersonCards";
import Jumbotron from "../Jumbotron";
import "./css/style.css";
const bodyText = "Many Asians have done tremendous work in the Movie and TV industry. Actors, Actress, directors, filmakers, animators, and many more deserve to be recognized for their iconic work in this space. Below are cards that are an homage to their work. Feel free to browse through the different cards and click on them to learn more!";

export const Trailblazers = () => {
  return (
    <div>
      <div id="explanationTrailblazer">
        <Jumbotron topHeader={"Hall of Fame"} header={"Asian Trailblazers"} body={bodyText} />
      </div>
      <div>
        <ul id="trailblazer">
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
