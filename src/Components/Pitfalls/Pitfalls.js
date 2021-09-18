import React, { useState }  from "react";
import MovieCards from "./MovieCards";
import data from "../../Static/data";
export const Pitfalls = () => {
  var firstTimeline = [<iframe title="First Timeline" src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1stu7DfY5G-JmQe2fnw3vj2ZUh3sKLbEV-_Vt3bzH17o&font=Default&lang=en&initial_zoom=2&height=550' width='90%' height='550' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>];
  const [currentTimeline, setTimeline] = useState(firstTimeline);
  const temp = "Relevant Movies \n";
  return (
    <div>
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
