import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Spinner } from "react-bootstrap";
import { changePassword } from "../../redux/actions/auth/password";
import "../scss/styles.scss";
import { authRedirect } from "../../utils/redirects";
import { faLock } from "@fortawesome/fontawesome-free-solid";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChangePassword = () => {
  const error = useSelector((state) => state.changePassword.error);
  const message = useSelector((state) => state.changePassword.message);
  const isLoading = useSelector((state) => state.changePassword.isLoading);

  const dispatch = useDispatch();

  authRedirect();

  const { id, token } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const passwordConf = e.target.passwordConf.value;
    dispatch(changePassword(id, token, password, passwordConf));
    e.target.reset();
  };

  return (
    <div style={{ marginTop: "10%", marginBottom: "10%" }}>
      <h2 className="section-title">
        <FontAwesomeIcon icon={faLock} />
      </h2>
      <div className="contact__container bd-grid">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New password"
            name="password"
            className="contact__input"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            name="passwordConf"
            className="contact__input"
          />

          {error ? (
            <Alert style={{ textAlign: "center" }} variant="danger">
              {error}
            </Alert>
          ) : null}
          {message ? (
            <Alert style={{ textAlign: "center" }} variant="success">
              {message}
            </Alert>
          ) : null}
          {isLoading ? (
            <div style={{ textAlign: "center" }}>
              <Spinner animation="border" size="md" role="status"></Spinner>
            </div>
          ) : message ? null : (
            <button className="passresreq__button">Reset Password</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
