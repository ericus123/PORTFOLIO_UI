import React, { useState } from "react";
import "./scss/styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwt_decode from "jwt-decode";
import {} from "@fortawesome/fontawesome-free-solid";
import {} from "@fortawesome/fontawesome-free-regular";
import image from "../assets/img/about.jpeg";
import { Button, Image, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../App.scss";
import "semantic-ui-css/semantic.min.css";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  let decoded = null;

  const token = localStorage.getItem("auth-token");
  if (token) {
    decoded = jwt_decode(token);
  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="l-header">
      <Navbar collapseOnSelect expand="lg" className="nav bd-grid">
        <Navbar.Brand href="#home">
          {" "}
          <Link to={"/"} style={{ color: "#fd7e14", textDecoration: "none" }}>
            Amani
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav__list">
            <Nav.Link className="nav__item">
              {" "}
              <Link to={"/#home"} className="nav__link on">
                Home{" "}
              </Link>
            </Nav.Link>

            <Nav.Link className="nav__item ">
              {" "}
              <Link to={"/#about"} className="nav__link">
                About{" "}
              </Link>
            </Nav.Link>

            <Nav.Link className="nav__item ">
              <Link to={"/#skills"} className="nav__link">
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__item ">
              <Link to={"/#work"} className="nav__link">
                Work
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__item ">
              <Link to={"/#contact"} className="nav__link">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__item ">
              <Link to={"/blog"} className="nav__link">
                Blog
              </Link>
            </Nav.Link>

            {decoded == null ? (
              <Nav.Link className="nav__item">
                <Link to={"/login"}>Log in</Link>
              </Nav.Link>
            ) : null}
          </Nav>
          {decoded != null ? (
            <Nav className="nav__drop">
              <NavDropdown
                title={
                  <div style={{ display: "flex", flexDirection: "columns" }}>
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                        padding: "2px",
                      }}
                      className="drop-image"
                      src={image}
                    />
                  </div>
                }
                id="collasible-nav-dropdown"
                noCaret
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <Link
                  to={"/profile/" + decoded.username}
                  style={{ textDecoration: "none" }}
                >
                  <NavDropdown.Item className="prof-item">
                    <span className="prof-names">
                      {decoded.firstName + " " + decoded.lastName}
                    </span>
                    <br />
                    <span
                      style={{
                        fontWeight: "300",
                        fontSize: "small",
                        color: "gray",
                      }}
                    >
                      @{decoded.username}
                    </span>
                  </NavDropdown.Item>
                </Link>
                {decoded.role === "superAdmin" || decoded.role === "Admin" ? (
                  <Link style={{ textDecoration: "none" }} to={"/dashboard"}>
                    <NavDropdown.Item href="#action/3.2">
                      Dashboard
                    </NavDropdown.Item>
                  </Link>
                ) : null}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Signout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav className="nav__signup">
              <Nav.Link style={{ width: "200px" }}>
                <Button style={{ borderRadius: "10%" }} variant="primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={"/signup"}
                  >
                    SignUp
                  </Link>
                </Button>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
