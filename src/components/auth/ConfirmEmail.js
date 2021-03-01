import React, { useEffect } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { confirmEmail } from "../../redux/actions/auth/signup";
import { useSelector, useDispatch } from "react-redux";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

const ConfirmEmail = () => {
  const { id, token } = useParams();
  const error = useSelector((state) => state.confirmEmail.error);
  const message = useSelector((state) => state.confirmEmail.message);
  const isLoading = useSelector((state) => state.confirmEmail.isLoading);
  const isVerified = useSelector((state) => state.confirmEmail.isVerified);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(confirmEmail(id, token));
  }, []);
  useEffect(() => {
    confirmEmail(id, token);
  }, [id, token]);
  return (
    <div style={{ marginTop: "10%", marginBottom: "10%" }}>
      {isVerified ? (
        <h2 className="section-title">
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "success" }} />{" "}
          Verified{" "}
        </h2>
      ) : (
        <h2 className="section-title">Verification </h2>
      )}

      <div className="contact__container bd-grid">
        {error ? (
          <Alert style={{ textAlign: "center" }} variant="danger">
            {error}
          </Alert>
        ) : null}
        {isLoading ? (
          <div style={{ textAlign: "center" }}>
            <Spinner animation="border" size="md" role="status"></Spinner>
          </div>
        ) : null}
        {message ? (
          <Alert style={{ textAlign: "center" }} variant="success">
            {message}
          </Alert>
        ) : null}
      </div>
    </div>
  );
};

export default ConfirmEmail;
