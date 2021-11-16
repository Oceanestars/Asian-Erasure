import React from "react"
// import { NavLink } from "react-router-dom";
import Link from 'next/link'
import navStyles from '../styles/navbar.module.css'
import { useRouter } from 'next/router';

export default function Navbar (){
  const { asPath } = useRouter();
  // console.log("Hello "+ asPath);
    return (
      
      <div>
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
        <ul id={navStyles.navBar}> 
          <li>
            <Link href="/">
            <a className={`${asPath === "/" || asPath == ""? "active" : ""} ${navStyles.underline}`}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/trailblazers">
            <a className={`${asPath == "/trailblazers" ? "active" : ""} ${navStyles.underline}`}>Trailblazers</a>
            </Link>
          </li>
          <li>
            <Link href="/pitfalls">
            <a className={`${asPath == "/pitfalls" ? "active" : ""} ${navStyles.underline}`}>Pitfalls</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
            <a className={`${asPath === "/about-us" ? "active" : ""} ${navStyles.underline}`}>About Us</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  function activeNavItem(){

  }
