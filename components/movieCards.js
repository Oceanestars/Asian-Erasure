import React from "react";
import pitfallsStyles from '../styles/pitfalls.module.scss'

export const MovieCards = React.memo(function MovieCards(props) {

  console.log(props.onClick);
  const backgroundStyle = {
    backgroundImage: `${props.data.image}`,
    backgroundSize: "cover",   
  }
  return (
    <div className={`${pitfallsStyles.card}`} style={backgroundStyle}>
      <h2 className={pitfallsStyles.title}>{props.data.movieName}</h2>
      <div className={pitfallsStyles.timelineButton}>
        TIMELINE
      </div>
    </div>
  );
});

export default MovieCards;
