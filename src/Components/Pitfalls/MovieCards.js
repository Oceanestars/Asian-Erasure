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

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 210,
    margin: "auto",
    borderRadius: 0,
    position: "relative",
  },
  content: {
    padding: 24,
  },
  cta: {
    display: "block",
    textAlign: "center",
    color: "#fff",
    letterSpacing: "3px",
    fontWeight: 200,
    fontSize: 12,
  },
  title: {
    color: "#fff",
    letterSpacing: "2px",
  },
}));

export const MovieCards = React.memo(function MovieCards(props) {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  console.log(props.onClick);
  return (
    <Card className={cx(styles.root, shadowStyles.root)} style={{height:"300px"}}>
      <CardMedia classes={mediaStyles} image={props.data.image} style={{filter: "blur(2px)"}}/>
      <CardActionArea>
        <CardContent className={styles.content}>
          <Box

            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={200}
            color={"common.white"}
            textAlign={"center"}
          >
            <h1 className={styles.title} style={{backgroundColor:"black"}}>{props.data.movieName}</h1>
            <p style={{backgroundColor:"black"}}>{props.data.description}</p>
          </Box>
          <Typography className={styles.cta} variant={"overline"}>
            Timeline
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

export default MovieCards;
