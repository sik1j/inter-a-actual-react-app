import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

const capitalize = (str: string) => {
  const out = str[0].toUpperCase() + str.slice(1);
  return out;
};

export const Nav: React.FC<Props> = () => {
  //** --------------------------*/
  //** Values -------------------*/
  //** --------------------------*/
  const [navBarOpen, setNavBarOpen] = useState(false);
  let navLinksClass = navBarOpen ? "nav-links nav-active" : "nav-links";
  let burgerClass = !navBarOpen ? "burger" : "burger toggle";

  //** --------------------------*/
  //** Functions ----------------*/
  //** --------------------------*/
  // const renderLinks = (navLinks: string[]) => {
  //   return navLinks.map((link, index) => (
  //     <li style={{ opacity: 1 }} key={link}>
  //       <Link to={`/${link}`}>{capitalize(link)} </Link>
  //     </li>
  //   ));
  // };
  const handleNavClick = () => {
    setNavBarOpen(!navBarOpen);
  };

  //** --------------------------*/
  //** JSX ----------------------*/
  //** --------------------------*/
  return (
    <header>
      <nav id="nav">
        <div className="logo-bg">
          <Link to="/">Inter-A</Link>
        </div>
        <ul className={navLinksClass}>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/students">Students</Link>
          </li> */}
          <li>
            <Link to="/society">Society</Link>
          </li>
          <li>
            <Link to="/apply">Apply</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* {renderLinks(["about", "students", "society", "contact"])} */}
        </ul>
        <div onClick={handleNavClick} className={burgerClass}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};
