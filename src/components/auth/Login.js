import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { loginRequest } from "../../redux/actions/auth/login";
import "../scss/styles.scss";
import { authRedirect } from "../../utils/redirects";
import {authRequest} from "../../redux/actions/auth/checkAuth";
import {simpleAlert} from "../Alerts";

const Login = () => {
  const error = useSelector((state) => state.login.error);
  const message = useSelector((state) => state.login.message);
  const email = useSelector((state) => state.login.email);
  const isLoading = useSelector((state) => state.login.isLoading);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const dispatch = useDispatch();

  authRedirect();

  const handleSubmit = (e) => {
    e.preventDefault();

    const Email = e.target.email.value;
    const Password = e.target.password.value;
    dispatch(loginRequest(Email, Password));
  };
  let history = useHistory();
  if (error === "Your account has not been verified") {
    setTimeout(() => {
      history.push(`/account/verify/${email}`);
    }, 2000);
  }

  return (
    <div style={{ marginTop: "10%", marginBottom: "10%" }}>
      <h2 className="section-title">Login</h2>
      <div className="contact__container bd-grid">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="contact__input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="cc-csc"
            className="contact__input"
          />
          <Row>
            {!error && !message && !isLoading ? (
              <Col style={{ width: "100%" }}>
                <span style={{ textAlign: "center" }}>
                  Forgot password? <br />
                  click{" "}
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/password/reset"}
                  >
                    here
                  </Link>
                </span>
              </Col>
            ) : null}

            <Col style={{ width: "100%" }}>
              {error ? <>{simpleAlert("danger",error)}</> : null}

              {message ? <>{simpleAlert("success",message)}</> : null}
              {isLoading ? (
                <div style={{ textAlign: "center" }}>
                  <Spinner animation="border" size="md" role="status"></Spinner>
                </div>
              ) : message ? null : (
                <button type="submit" className="contact__button button">
                  Login
                </button>
              )}
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Login;
