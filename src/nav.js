import React from "react";
import "./nav.css";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./footer";

function Nav() {
  return (
    <nav>
      <div className="nav">
      <ul>
        
          <li><Link to="/footer">Home</Link></li>
          <li><Link to="/footer">About</Link></li>
          <li><Link to="/footer">Menu</Link></li>
          <li><Link to="/footer">Reservations</Link></li>
          <li><Link to="/footer">Order Online</Link></li>
          <li><Link to="/footer">Login</Link></li>

      </ul>

      <Routes>
        <Route path="/footer" element={<Footer />} />
      </Routes> </div>
         </nav>

  );
}

export default Nav;
