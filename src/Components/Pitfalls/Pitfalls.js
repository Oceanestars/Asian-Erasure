import React, { useState }  from "react";
import MovieCards from "./MovieCards";
import data from "../../Static/data";
export const Pitfalls = () => {
  var firstTimeline = [<iframe title='Avatar the Last airbender timeline' src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=14RIgj96O9WoD0wLOHoPhuvcY0p_FUpsqum_FcDJn-JI&font=Default&lang=en&initial_zoom=2&height=550' width='90%' height='550' webkitallowfullscreen mozallowfullscreen allowFullScreen frameBorder='0'></iframe>];
  const [currentTimeline, setTimeline] = useState(firstTimeline);
  const temp = "Relevant Movies \n";
  return (
    <div style={{ marginTop: "2%" }}>
      <div >{currentTimeline}</div>
      <h2 style={{ float: "left" }}>{temp}</h2>
      <ul style={{ display: "inline" }}>
        {data.map((item) => (
          <li
            style={{
              float: "left",
              marginRight: "1%",
              marginTop: "6em",
              listStyleType: "none",
            }}
          >
            <div onClick={() => {setTimeline(item.timeline); console.log("image was clicked");}} >
            <MovieCards data={item} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
