import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./scss/styles.scss";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwt_decode from "jwt-decode";
import {} from "@fortawesome/fontawesome-free-solid";
import {} from "@fortawesome/fontawesome-free-regular";
import image from "../assets/img/about.jpeg";
import { Button, Image, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { authRequest } from "../redux/actions/auth/checkAuth";

// import { GoToLogin } from "../utils/redirects";
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
  const history = useHistory();
  const user = useSelector((state) => state.checkAuth.user);
  const error = useSelector((state) => state.checkAuth.error);

  const dispatch = useDispatch();
  const token = localStorage.getItem("auth-token");
  useEffect(() => {
    if (error == "Invalid Token");
    localStorage.clear();
  }, [error]);
  useEffect(() => {
    dispatch(authRequest(token));
  }, [token]);

  const scrolToSection = async (id) => {
    await history.push(`/home/${id}`);
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
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
              <Link
                to={"/"}
                className="nav__link on"
                onClick={() => {
                  scrolToSection("#home");
                }}
              >
                Home{" "}
              </Link>
            </Nav.Link>

            <Nav.Link className="nav__item ">
              {" "}
              <Link
                to={"/"}
                className="nav__link"
                onClick={() => {
                  scrolToSection("#about");
                }}
              >
                About{" "}
              </Link>
            </Nav.Link>

            <Nav.Link className="nav__item ">
              <Link
                to={"/"}
                className="nav__link"
                onClick={() => {
                  scrolToSection("#skills");
                }}
              >
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__item ">
              <Link
                to={"/"}
                className="nav__link"
                onClick={() => {
                  scrolToSection("#work");
                }}
              >
                Work
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__item ">
              <Link
                to={"/"}
                className="nav__link"
                onClick={() => {
                  scrolToSection("#contact");
                }}
              >
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__item ">
              <Link to={"/blog"} className="nav__link">
                Blog
              </Link>
            </Nav.Link>

            {!user ? (
              <Nav.Link className="nav__item">
                <Link to={"/login"}>Log in</Link>
              </Nav.Link>
            ) : null}
          </Nav>
          {user ? (
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
                      src={user.avatar}
                    />
                  </div>
                }
                id="collasible-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item className="prof-item">
                  <Link to={"/profile"} style={{ textDecoration: "none" }}>
                    <span className="prof-names">
                      {user.firstName + " " + user.lastName}
                    </span>
                    <br />
                    <span
                      style={{
                        fontWeight: "300",
                        fontSize: "small",
                        color: "gray",
                      }}
                    >
                      @{user.username}
                    </span>
                  </Link>
                </NavDropdown.Item>

                {user.role === "superAdmin" || user.role === "Admin" ? (
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
