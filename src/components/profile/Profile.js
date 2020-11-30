import React, { useState } from "react";
import image from "../../assets/img/about.jpeg";
import "../scss/styles.scss";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/fontawesome-free-solid";
import { DecisionModal } from "../Modals/DecisionModal";

const Profile = () => {
  const [advanced, changeAdvanced] = useState("none");

  const [formMode, changeFormMode] = useState(true);
  const setAdvanced = () => {
    if (advanced === "none") {
      changeAdvanced("block");
    } else {
      changeAdvanced("none");
    }
  };
  const removeImage = () => {};
  const setFormMode = () => {
    if (formMode) {
      changeFormMode(false);
    }
  };
  return (
    <div className="profile">
      <div className="profile_picture">
        <img src={image} />
        <br />
        <span>
          <button className="update">Update</button>
          <button className="remove" onClick={removeImage}>
            Remove
          </button>
        </span>
      </div>
      <div className="profile_details">
        <br />

        <br />
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: JOHN"
                readOnly={formMode}
                defaultValue="JOHN"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Doe"
                readOnly={formMode}
                defaultValue="Doe"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: john123"
                readOnly={formMode}
                defaultValue="john123"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                readOnly={formMode}
                defaultValue="amaniericus@gmail.com"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.File id="exampleFormControlFile1" label="Profile Image" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                readOnly={formMode}
                controlId="exampleForm.ControlTextarea1"
                defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
              />
            </Form.Group>
          </Form.Row>
          <Button
            onClick={setFormMode}
            style={{ float: "right" }}
            variant="primary"
          >
            Update
          </Button>
        </Form>
        <br />
        <Row className="row_5">
          <div onClick={setAdvanced}>
            <FontAwesomeIcon icon={faCog} style={{ fontSize: "larger" }} />
            &nbsp; Advanced Settings
          </div>
        </Row>
        <br />
        <Row style={{ display: advanced }} className="row_6">
          <div>
            <h4 style={{ color: "red" }}>Danger Zone</h4>
            <br />
            <h4>Delete Account</h4>
            <br />
            <p>Deleting your account will:</p>
          </div>
          <ul>
            <li>
              <span style={{ fontSize: "x-large" }}>&bull;</span>&nbsp;Delete
              your profile, along with your authentication associations.
            </li>

            <li>
              {" "}
              <span style={{ fontSize: "x-large" }}>&bull;</span>&nbsp; Delete
              any and all content you have, such as articles, comments, your
              reading list or chat messages.
            </li>
            <li>
              {" "}
              <span style={{ fontSize: "x-large" }}>&bull;</span>&nbsp;Allow
              your username to become available to anyone.
            </li>
          </ul>

          <div className="delete_acc">Delete Account</div>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
