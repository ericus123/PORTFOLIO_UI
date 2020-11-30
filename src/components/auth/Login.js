import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Spinner } from "react-bootstrap";
import { loginRequest } from "../../redux/actions/auth/login";
import "../scss/styles.scss";
import { authRedirect } from "../../utils/redirects";

const Login = () => {
  const error = useSelector((state) => state.login.error);
  const message = useSelector((state) => state.login.message);
  const isLoading = useSelector((state) => state.login.isLoading);

  const dispatch = useDispatch();

  authRedirect();

  const handleSubmit = (e) => {
    e.preventDefault();

    const Email = e.target.email.value;
    const Password = e.target.password.value;
    dispatch(loginRequest(Email, Password));
  };

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
          {error ? <Alert variant="danger">{error}</Alert> : null}
          {message ? <Alert variant="success">{message}</Alert> : null}
          {isLoading ? (
            <div style={{ textAlign: "center" }}>
              <Spinner animation="border" size="sm" role="status"></Spinner>
            </div>
          ) : message ? null : (
            <button type="submit" className="contact__button button">
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
