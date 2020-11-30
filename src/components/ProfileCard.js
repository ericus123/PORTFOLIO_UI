import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faLaptop,
  faEnvelope,
} from "@fortawesome/fontawesome-free-solid";
import { Image } from "react-bootstrap";
import image from "../assets/profile.jpeg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <Image className="Image" src={image} roundedCircle />
      <br />
      <br />
      Amani Eric
      <br />
      <FontAwesomeIcon icon={faLaptop} /> Web Developer
      <br />
      <FontAwesomeIcon icon={faEnvelope} /> amaniericus@gmail.com <br />
      <FontAwesomeIcon icon={faLocationArrow} /> Kigali,Rwanda
    </div>
  );
};
export default ProfileCard;
