import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/b1.jpg";
import logo from "../../assets/logo.png";
//import "./footer.scss";

/* Footer with demo and accessible links */
const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="website-logo" />
            <Link to="/">Awesome Movies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">
              <i className="fas fa-building"></i> Home
            </Link>
            <Link to="/movies">
              <i className="fas fa-video"></i> Our Popular Movies
            </Link>
            <Link to="/about">
              <i className="fas fa-user"></i> About Developer
            </Link>
            <Link to="/">
              <i className="fas fa-envelope"></i> Contact Me
            </Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">
              <i className="fas fa-play"></i> Premium Movies
            </Link>
            <Link to="/">
              <i className="fas fa-trophy"></i> Best Movie of{" "}
              {new Date().getFullYear()}
            </Link>
            <Link to="/">
              <i className="fas fa-file-video"></i> You Must Watch
            </Link>
            <Link to="/">
              <i className="fas fa-tv"></i> Awesome TV Series
            </Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">
              <i className="fas fa-hand-holding"></i> Terms of Services
            </Link>
            <Link to="/">
              <i className="fas fa-lock"></i> Privacy Policies
            </Link>
            <Link to="/">
              <i className="fas fa-cloud"></i> Our API Docs
            </Link>
            <Link to="/">
              <i className="fas fa-users"></i> Customer Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
