import React from "react";
import data from "../../Static/dataPeople";
import PersonCards from "./PersonCards";
import Jumbotron from "./Jumbotron";

export const Trailblazers = () => {
  return (
    <div>
      <div style={{  display: "flex",justifyContent: "center", marginTop:"2%"}}>
        <Jumbotron />
      </div>
      <div  style={{width:'100vw'}}>
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
