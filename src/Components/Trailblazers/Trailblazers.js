import React from "react";
import data from "../../Static/dataPeople";
import PersonCards from "./PersonCards";
import Jumbotron from "./Jumbotron";

export const Trailblazers = () => {
  return (
    <div>
      <div>
        {" "}
        <Jumbotron />
      </div>
      <div  style={{width:'90vw'}}>
        <ul style={{ display: "flex", justifyContent: "flex-start", flexWrap:"wrap", gap:"3%"}}>
          {data.map((item) => (
            <li
              style={{
                display: "inline-block",

                marginTop: "6vw",
                listStyleType: "none",
              }}
            >
              <PersonCards data={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
