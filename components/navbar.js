import React from "react";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import Link from "next/link";
import navStyles from "../styles/navbar.module.scss";
import { useRouter } from "next/router";
import menuIcon from "../public/menuIcon.svg";
import Image from "next/image";

export default function Navbar() {
  const { asPath } = useRouter();
  const [collapse, setCollapse] = useState(true);

  const handleClick = () => {
    setCollapse(!collapse);
  };

  const collapseNavBar = () => {
    setCollapse(!collapse);
  };
  // console.log("Hello "+ asPath);
  return (
    <div className={navStyles.navBarContainer}>
      {/* React router */}
      {/* <li>
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
        </li> */}
      {/* Next.JS */}

      <button className={navStyles.navBarMobile} onClick={handleClick}>
        <Image src={menuIcon} alt="Mobile menu icon" />
      </button>

      <ul id={navStyles.navBar} className={collapse ? navStyles.hidden : ""}>
        <li>
          <Link href="/">
            <a
              className={`${asPath === "/" || asPath == "" ? "active" : ""} ${
                navStyles.underline
              }`}
              onClick={collapseNavBar}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/trailblazers">
            <a
              className={`${asPath == "/trailblazers" ? "active" : ""} ${
                navStyles.underline
              }`}
              onClick={collapseNavBar}
            >
              Trailblazers
            </a>
          </Link>
        </li>
        <li>
          <Link href="/pitfalls">
            <a
              className={`${asPath == "/pitfalls" ? "active" : ""} ${
                navStyles.underline
              }`}
              onClick={collapseNavBar}
            >
              Pitfalls
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a
              className={`${asPath === "/about-us" ? "active" : ""} ${
                navStyles.underline
              }`}
              onClick={collapseNavBar}
            >
              About Us
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function activeNavItem() {}
