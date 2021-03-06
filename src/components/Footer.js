import React from "react";
import "./scss/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLaptop,
} from "@fortawesome/fontawesome-free-solid";
import {
  faGithub,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div className="get_in_touch">
          <p className="footer__title">Amani</p>
          <div className="footer_about">
            <p>
              <FontAwesomeIcon icon={faLaptop} />
              &nbsp;Fullstack web developer
            </p>
            <p>
              <a style={{ textDecoration: "none" }} href="tel: +250783343195">
                <FontAwesomeIcon icon={faPhone} />
                &nbsp;(+250)783343195
              </a>
            </p>
            <p>
              <a
                style={{ textDecoration: "none" }}
                href="mailto:amaniericus@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;amaniericus@gmail.com
              </a>
            </p>
          </div>
          <div className="footer__social">
            <a
              target="_blank"
              href="https://www.instagram.com/amaniericus/"
              className="footer__icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC1vRHri9_SG0aPxjahm70OA"
              className="footer__icon"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" className="footer__icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/amani-eric-b45986172/"
              className="footer__icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a
              target="_blank"
              href="https://github.com/ericus123"
              className="footer__icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <NewsLetter />
      </div>
      <div className="copyright">
        <p>&#169; 2021 amanieric all rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
