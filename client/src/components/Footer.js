import React from "react";
import "./Footer.css";
//import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Thank you for joining the couch potatoe family.
        </p>
        <div className="input-areas"></div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Wilmar S.</h2>
          </div>
          <div className="footer-link-items">
            <h2>Samantha A.</h2>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Cielle C.</h2>
          </div>
          <div className="footer-link-items">
            <h2>Carlos O.</h2>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo"></div>
          <img
            src="images/logocpc.png"
            style={{ width: 200, marginTop: -4, marginRight: -197 }}
            alt=""
          />
          <div className="social-icons"></div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
