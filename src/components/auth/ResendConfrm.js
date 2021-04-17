import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";

class ResendConfirm extends Component {
  render() {
    return (
      <div
        style={{ display: "inline-block", textAlign: "justify", margin: "10%", minHeight:"90vh" }}
      >
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
      </div>
    );
  }
}
export default ResendConfirm;
