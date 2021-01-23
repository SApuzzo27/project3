import React from "react";
import "./Footer.css";
import Row from "./Row";
//import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer">
        <div className="col-lg-12 text-center footertext">
          <strong>Wilmar S.</strong> <strong>Samantha A.</strong>{" "}
          <strong>Cielle C.</strong> <strong>Carlos O.</strong>
          <br />
          <span> Copyright &copy; 2021 </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
