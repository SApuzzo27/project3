import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoutBtn from "../components/LogoutButton"

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
          <img
            src="images/logocpc.png"
            style={{ width: 60, marginTop: -4, marginRight: 200 }}
          />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/groups"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Groups
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-links" onClick={closeMobileMenu}>
                User
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/others"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Movies or other
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Others"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={LogoutBtn}
              >
                Log Out 
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
