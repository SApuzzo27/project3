import React from "react";
import "./Footer.css";
import Row from "./Row";
//import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer bg-dark text-white m-auto p-3 col-sm-12">
        <div className="col-lg-12 text-center">
          <strong>Wilmar S.</strong> <strong>Samantha A.</strong>{" "}
          <strong>Cielle C.</strong> <strong>Carlos O.</strong>
          <br />
          <span className="text-muted"> Copyright &copy; 2021 </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
