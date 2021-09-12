import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { black } from "@material-ui/core/colors";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
//import { usePointNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/point';
import { useZoomNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/zoom";

import "./NavBar.css";
// import { Font, FontProvider } from 'website/src/components/Font';

export const ZoomNavigationMenuStyle = React.memo(
  function ZoomNavigationMenu() {
    const [index, setIndex] = React.useState();
    const handleClick = (e) => {
      console.log(e);
      //   e.preventDefault();
      setIndex(e);
    };
    return (
      // change this navbar button padding & margin-top manually
      <Box height={56} display={"flex"}>
        <NavMenu id="NavBar" useStyles={useZoomNavigationMenuStyles}>
          <NavItem
            as={"div"}
            active={index === 0}
            onClick={() => handleClick(0)}
          >
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem
            as={"div"}
            active={index === 1}
            onClick={() => handleClick(1)}
          >
            <Link to="/trailblazers">Trailblazers</Link>
          </NavItem>
          <NavItem
            as={"div"}
            active={index === 2}
            onClick={() => handleClick(2)}
          >
            <Link to="/pitfalls">Pitfalls</Link>
          </NavItem>
          <NavItem
            as={"div"}
            active={index === 3}
            onClick={() => handleClick(3)}
          >
            <Link to="/about">About Us</Link>
          </NavItem>
        </NavMenu>
      </Box>
    );
  }
);
