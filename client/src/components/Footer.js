import React from "react";
import "./Footer.css";



function Footer() {
  return (
    <div className="footer">
      <footer className="footer">
            <img className="footerLogo"
              src="images/logocpc.png"
            />
    
        <div className="col-lg-12  footertext">
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
