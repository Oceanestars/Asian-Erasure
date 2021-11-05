import React from "react";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import "./css/style.css";

const Jumbotron = () => {
  return (
    <div id='jumbotronStyle'> 
      <Box maxWidth={1000}>
        <CardContent>
          <TextInfoContent
            useStyles={useN04TextInfoContentStyles}
            overline={"Hall of Fame"}
            heading={"Asian Trailblazers"}
            body={
              "Many Asians have done tremendous work in the Movie and TV industry. Actors, Actress, directors, filmakers, animators, and many more deserve to be recognized for their iconic work in this space."
            }
          />
        </CardContent>
      </Box>
    </div>
  );
};

export default Jumbotron;
