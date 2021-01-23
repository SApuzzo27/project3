import React from "react";
import "./Footer.css";
//import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          <strong>Wilmar S.</strong> <strong>Samantha A.</strong>{" "}
          <strong>Cielle C.</strong> <strong>Carlos O.</strong>
        </p>
        <div className="input-areas"></div>
      </section>

      <section className="social-media">
        <div classname="social-media-wrap">
          <div className="footer-logo"></div>
          <img
            src="images/logocpc.png"
            style={{ width: 100, marginTop: -4, marginRight: 800 }}
            alt=""
          />
          <div className="social-icons"></div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
