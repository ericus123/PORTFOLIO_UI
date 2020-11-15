import React, { Component } from "react";
import logo from "./assets/logo512.png";
import profile from "./assets/avatar-3637425_640.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSignOutAlt,
  faAddressBook,
  faHome,
  faInfo,
  faSignInAlt,
  faTasks,
  faGlobe,
  faUser,
  faTachometerAlt,
} from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import Blog from "./Blog";
class Navbar extends Component {
  render() {
    // const openNavbar = () => {
    //   document.querySelector(".hamberger").className = "hamberger_opened";
    // };
    const userSettings = (e) => {
      Object.assign(e.target.style, {
        transform: "scale(1.2)",
        color: "rgb(0, 140, 255)",
        transition: "1s",
      });
      Object.assign(document.querySelector(".droped_down").style, {
        display: "block",
      });
    };
    const closeprofileDetails = () => {
      document.querySelector(".droped_down").style.display = "none";
    };

    return (
      <div>
        <nav className="header-nav">
          <div className="brand">
            <img className="logo" src={logo} alt="logo" />
            <h1>
              A<span>E</span>
            </h1>
          </div>
          <ul>
            <li className="link">
              <Link to={"/home"} className="home">
                <FontAwesomeIcon icon={faHome} />
                Home
              </Link>
            </li>
            <li className="link">
              <Link to={"/about"}>
                <FontAwesomeIcon icon={faInfo} />
                About
              </Link>
            </li>
            <li className="link">
              <Link to={"/projects"}>
                <FontAwesomeIcon icon={faTasks} />
                Projects
              </Link>
            </li>
            <li className="link">
              <Link to={"/contact"}>
                <FontAwesomeIcon icon={faAddressBook} />
                Contact
              </Link>
            </li>
            <li className="link">
              <Link to={"/blog"}>
                <FontAwesomeIcon icon={faGlobe} />
                Blog
              </Link>
            </li>
          </ul>
          <div className="profile">
            <div className="profile_details">
              <div className="details">
                <img className="profile_img" src={profile} />
                <h1 className="username">Amani</h1>
              </div>
              <div onClick={userSettings} id="drop_btn" className="drop_down">
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div id="drop" className="droped_down">
              <div>
                {" "}
                <Link to={"/profile"}>
                  <FontAwesomeIcon icon={faUser} /> Profile
                </Link>
              </div>
              <div>
                <Link to={"/dashboard"}>
                  <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                </Link>
              </div>
              <div>
                <Link to={"/logout"}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </Link>
              </div>
              <div onClick={closeprofileDetails} className="close">
                <h1 title="Close">Close</h1>
              </div>
            </div>
          </div>
          {/* <div onClick={openNavbar} class="hamberger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div> */}
        </nav>
      </div>
    );
  }
}
export default Navbar;
