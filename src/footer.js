import React from "react";
import Logo from "./l.png";
import "./footer.css"
import { Link } from "react-router-dom"; 

function Footer(){
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} ></img>
        <div className="footer-site-map">
          <p className="footer-title"> SITEMAP</p>
          <Link className="footer-item" to="/">Home</Link>
          <Link className="footer-item" to="/footer">About</Link>
          <Link className="footer-item" to="/menu">Menu</Link>
          <Link className="footer-item" to="/reserve">Reservations</Link>
          <Link className="footer-item" to="/order">Order Online</Link>
          <Link className="footer-item" to="/login">Login</Link>
        </div>
        <div className="footer-contact">
          <p className="footer-title"> CONTACT</p>
          <p className="footer-item"> Instagram</p>
          <p className="footer-item"> 71-604-655</p>
          <p className="footer-item">Facebook </p>
        </div>
        <div className="footer-social">
          <p className="footer-title"> SOCIAL MEDIA LINKS</p>
          <a className="footer-item" href="#" >Facebook</a>
          <a className="footer-item" href="#">Instagram</a>
          <a className="footer-item" href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;