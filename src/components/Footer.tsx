import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import qeTiger from "../logo.svg";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="decorative-line"></div>
      <nav className="ftr-links ">
        <ul>
          <li>
            <a href="">Mobile App</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
        </ul>
        <div className="logo-bg">
          <Link to="/">Inter-A</Link>
        </div>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </ul>
      </nav>
      <div className="social-links">
        <div></div>
        <div className="social-links-container">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/social.intera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/social_intera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="social-icons">
            <a
              href="http://www.sd36.bc.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSchool} />
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.surreyschools.ca/schools/queene/Pages/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPaw} />
            </a>
          </div>
        </div>
        <a className="to-top-icon" href="#nav">
          <img src={require("../assets/ArrowUpCircle.png")} alt="" />
        </a>
      </div>
      <div className="ftr-btm">
        <div className="trademark">© Interstellar Web Services 2022.</div>
        <a href="#nav">Back to Top</a>
      </div>
    </footer>
  );
};
