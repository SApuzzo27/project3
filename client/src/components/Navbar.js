import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        The Couch Potato Club
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img
            src="images/logocpc.png"  
            style={{ width: 60, marginTop: -36, marginRight: 200 }}
          />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <Link to="/groups" className="nav-links" onClick={closeMobileMenu}>
            Groups
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/user"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Page
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                Sign in
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/signout"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign out
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/Others"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            // </li> */}

            {/* <li>
              <Link
                to='/Others'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
