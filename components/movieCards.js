import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import pitfallsStyles from '../styles/pitfalls.module.css'

export const MovieCards = React.memo(function MovieCards(props) {
  // const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  console.log(props.onClick);
  return (
    <div className={`${pitfallsStyles.card} ${shadowStyles.root}`} style={{backgroundImage:`${props.data.image}`,backdropFilter: "blur(50px)"}}>
      {/* <CardMedia classes={mediaStyles} image={props.data.image} style={{filter: "blur(2px)"}}/> */}
      
          {/* <Box
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={200}
            color={"common.white"}
            textAlign={"center"}
          > */}
        
            <h2 className={pitfallsStyles.title}>{props.data.movieName}</h2>
            {/* <p style={{backgroundColor:"black"}}>{props.data.description}</p> */}
          {/* </Box> */}
            <div className={pitfallsStyles.timelineButton}>
              TIMELINE
            </div>
          
  
    </div>
  );
});

export default MovieCards;
