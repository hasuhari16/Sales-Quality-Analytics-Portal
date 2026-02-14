import React from "react";
import logo from "../images/xyz_Logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logoCont">
          <img src={logo} alt="CompanyLogo" height="40px" />
        </div>
        <h2>Retail Chain – Sales & Quality Analytics Portal</h2>
        <div className="tabCont">
          <Link to="/">Home</Link>
          <Link to="/sales">Sales</Link>
          <Link to="/quality">Quality</Link>
        </div>
      </nav>
    </>
  );
}
