import React from "react";
import "./nav.css";
import { Routes, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav">
      <ul>
        
          <li><Link to="/">Home</Link></li>
          <li><Link to="/footer">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reserve">Reservations</Link></li>
          <li><Link to="/soon">Order Online</Link></li>
          <li><Link to="/soon">Login</Link></li>

      </ul>

       </div>
         </nav>

  );
}

export default Nav;
