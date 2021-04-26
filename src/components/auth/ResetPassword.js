import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Spinner } from "react-bootstrap";
import { passResetRequest } from "../../redux/actions/auth/password";
import "../scss/styles.scss";
import { authRedirect } from "../../utils/redirects";
import { faLock } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { simpleAlert } from "../Alerts";

const ResetPassword = () => {
  const error = useSelector((state) => state.passResetRequest.error);
  const message = useSelector((state) => state.passResetRequest.message);
  const email = useSelector((state) => state.passResetRequest.email);
  const isLoading = useSelector((state) => state.passResetRequest.isLoading);

  const dispatch = useDispatch();

  authRedirect();
  const handleSubmit = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;
    dispatch(passResetRequest(Email));
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
            type="email"
            placeholder="Email"
            name="email"
            className="contact__input"
          />

          {error ? <>{simpleAlert("danger",error)}</> : null}
          {message ? (
            <Alert style={{ textAlign: "center" }} variant="success">
              A password reset link has been sent to <b>{email}</b>
              <br />
              didn't receive the email?{" "}
              <span
                style={{ color: "#007bff", cursor: "pointer" }}
                onClick={() => {
                  dispatch(passResetRequest(email));
                }}
              >
                resend
              </span>
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

export default ResetPassword;
