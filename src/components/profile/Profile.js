import React, { useState } from "react";
import image from "../../assets/img/about.jpeg";
import "../scss/styles.scss";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/fontawesome-free-solid";
import { DecisionModal } from "../Modals/DecisionModal";

const Profile = () => {
  const [advanced, changeAdvanced] = useState("none");
  const [active, setActive] =  useState("about");
  const [showPassword, setShowPassword] =  useState(false)
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
       <div className="file">   
         <form>
         Change photo
           <input type="file"/>
         </form>
         </div> 
      </div>
      <div className="profile_details">
        <br />

        <br />
        <Row className="prof_nav">
          <ul>
            <li className = {active == "about" ? "on" : null} onClick={() => {setActive("about")}}>About</li>
            <li className = {active == "settings" ? "on" : null} onClick={() => {setActive("settings")}}>Advanced Settings</li>
          </ul>
        
        </Row>
        <br />
        <br />
        <br />
        {active == "about" ? <Form>
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
        </Form> :
        <>
        <div>
          <h1><p>Password</p></h1>
          <Link onClick={() => {setShowPassword(!showPassword)}} >Change password</Link>
         {showPassword ?  <Form >
          <Form.Row>
            <Form.Group style={{width:"50%"}} >
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="******"
              />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group style={{width: "50%"}}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="******"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group style={{width: "50%"}}>
          <Button
            onClick={setFormMode}
            style={{ float: "right" }}
            variant="primary"
          >
            Change
          </Button>
          </Form.Group>
          </Form.Row>
          <br/>
          </Form> : null}
        </div>
        <Row  className="row_6">
          <div>
            <h4 style={{ color: "red" }}>Danger Zone</h4>
            <h4>Delete Account</h4>
            <br />
            <p>Deleting your account will:</p>
          </div>
          <ul>
            <li>
              <span style={{ fontSize: "large" }}>&bull;</span>&nbsp;Delete
              your profile, along with your authentication associations.
            </li>
            <li>
              {" "}
             <p> <span style={{ fontSize: "large" }}>&bull;</span>&nbsp;Delete
              any and all content you have, such as articles, comments, your reading list or chat messages.
             
              </p>
            </li>
            <li>
              {" "}
              <span style={{ fontSize: "large" }}>&bull;</span>&nbsp;Allow
              your username to become available to anyone.
            </li>
          </ul>

          <div className="delete_acc">Delete Account</div>
          <br/>
          <br/>
        </Row>
        </>}
      </div>
    </div>
  );
};

export default Profile;
