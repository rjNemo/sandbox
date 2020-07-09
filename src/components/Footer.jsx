import React from "react";

import Section from "./Section";

import { Link } from "./../util/router.js";
import * as ROUTES from "../global/routes";

import "./Footer.scss";

const Footer = ({ color, size, logo, copyright }) => (
  <Section color={color} size={size}>
    <div className="FooterComponent__container container">
      <div className="brand left">
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="links right">
        <Link to={ROUTES.ABOUT}>À propos</Link>
        <Link to={ROUTES.FAQ}>FAQ</Link>
        <Link to={ROUTES.CONTACT}>Contact</Link>
      </div>
      <div className="social right">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <i className="fab fa-facebook-f" />
          </span>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <i className="fab fa-instagram" />
          </span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <i className="fab fa-linkedin" />
          </span>
        </a>
        <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-medium" />
          </span>
        </a>
      </div>
      <div className="copyright left">{copyright}</div>
    </div>
  </Section>
);

export default Footer;
