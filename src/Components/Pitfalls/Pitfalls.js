import React from "react";
import MovieCards from "./MovieCards";
import data from "../../Static/data";
export const Pitfalls = () => {
  const temp = "Relevant Movies \n";
  return (
    <div>
      <h2 style={{ float: "left" }}>{temp}</h2>
      <iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1stu7DfY5G-JmQe2fnw3vj2ZUh3sKLbEV-_Vt3bzH17o&font=Default&lang=en&initial_zoom=2&height=650" width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
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
            <MovieCards data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
