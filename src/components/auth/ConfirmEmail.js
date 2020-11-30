import React, { Component } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { confirmEmail } from "../../redux/actions/auth/signup";
import { connect } from "react-redux";

class ConfirmEmail extends Component {
  componentDidMount() {
    confirmEmail(this.props.match.params.email, this.props.match.params.token);
  }
  render() {
    // if(!localStorage.getItem("Unverified"){

    // })

    const { error, isLoading, message } = this.props;
    return (
      <div
        style={{ display: "inline-block", textAlign: "justify", margin: "10%" }}
      >
        {message ? (
          <Alert transition="Fade" variant="success">
            <Alert.Heading>Confirm Email:</Alert.Heading>
            <p>
              Hello Amani, a confirmation email has been sent to your email{" "}
              <Alert.Heading>amaniericus@gmail.com</Alert.Heading>
            </p>
            <hr />
            <p className="mb-0">
              Didn't receive email ? &nbsp;
              <Button size="sm" variant="info">
                Resend
              </Button>
            </p>
          </Alert>
        ) : null}
        {isLoading ? (
          <Spinner animation="border" size="sm" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : null}
        {message ? <Alert variant="danger">{message}</Alert> : null}
        {error ? <Alert variant="danger">{error}</Alert> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.confirmEmail.message,
    error: state.confirmEmail.error,
    isLoading: state.confirmEmail.isLoading,
    isVerified: state.confirmEmail.isVerified,
  };
};
export default connect(mapStateToProps, { confirmEmail })(ConfirmEmail);
