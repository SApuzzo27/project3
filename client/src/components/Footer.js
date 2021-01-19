import React from "react";
import "./Footer.css";
//import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          <strong>Wilmar S.</strong> <strong>Samantha A.</strong> <strong>Cielle C.</strong> <strong>Carlos O.</strong>
        </p>
        <div className="input-areas"></div>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo"></div>
          <img
            src="images/logocpc.png"
            style={{ width: 100, marginTop: -4, marginRight: 800 }}
            alt=""
          />
          <div class="social-icons"></div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
