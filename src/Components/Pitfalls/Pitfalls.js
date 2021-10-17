import React, { useState }  from "react";
import MovieCards from "./MovieCards";
import data from "../../Static/data";
export const Pitfalls = () => {
  var firstTimeline = [<iframe title="All movies timeline" src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Ugphq-UldTUr2h1yau_PtlkUir33sJGTygKj9luDi38&font=Default&lang=en&initial_zoom=2&height=650' width='90%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
];
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
