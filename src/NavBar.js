import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const ZoomNavigationMenuStyle = React.memo(
  function ZoomNavigationMenu() {
    return (
      
      <div id="navBar2">
        <li>
          <NavLink exact activeClassName="underline" to='/home'>Home</NavLink>
          </li>
        <li>
          <NavLink exact activeClassName="underline" to="/trailblazers">Trailblazers</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="underline" to="/pitfalls">Pitfalls</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="underline" to="/about">About Us</NavLink>
        </li>
      </div>
    );
  }
);
