import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Row } from "react-bootstrap";
import "../styles.scss";

export const PostShares = () => {
  return (
    <Row style={{ marginTop: "5px" }} className="social-shares">
      <div>
        <button
          style={{
            background: "#4267B2",
            color: "white",
            borderRadius: "5%",
            border: "none",
          }}
        >
          <FontAwesomeIcon style={{ color: "white" }} icon={faFacebook} />
          &nbsp;Facebook
        </button>
      </div>
      &nbsp;
      <div>
        <button
          style={{
            background: "#25D366",
            color: "white",
            borderRadius: "5%",
            border: "none",
          }}
        >
          <FontAwesomeIcon style={{ color: "white" }} icon={faWhatsapp} />
          &nbsp;Whatsapp
        </button>
      </div>
      &nbsp;
      <div>
        <button
          style={{
            background: "#E1306C",
            color: "white",
            borderRadius: "5%",
            border: "none",
          }}
        >
          <FontAwesomeIcon style={{ color: "white" }} icon={faInstagram} />
          &nbsp;Instagram
        </button>
      </div>
    </Row>
  );
};
