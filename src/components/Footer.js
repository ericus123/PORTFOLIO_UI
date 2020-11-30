import React, { useEffect } from "react";
import "./scss/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faEnvelope,
  faPhone,
  faLaptop,
} from "@fortawesome/fontawesome-free-solid";
import {
  faGithub,
  faTwitter,
  faYoutube,
  faInstagram,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/fontawesome-free-regular";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Alert, Spinner } from "react-bootstrap";
import { subscribeNewsletter } from "../redux/actions/subscriptions/newsLetter";

const Footer = () => {
  const msg = useSelector((state) => state.subscribeNewsletter.msg);
  const email = useSelector((state) => state.subscribeNewsletter.email);
  const isLoading = useSelector((state) => state.subscribeNewsletter.isLoading);
  const error = useSelector((state) => state.subscribeNewsletter.error);
  const dispatch = useDispatch();
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
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="tel:+250783343195"
              >
                <FontAwesomeIcon icon={faPhone} />
                &nbsp;(+250)783343195
              </a>
            </p>
            <p>
              <a href="mailto:amaniericus@gmail.com">
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

        <div className="subscribe">
          <h1 className="title">Subscribe to our newsletter</h1>

          <p className="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              dispatch(subscribeNewsletter(e.target.subscriber.value));
              e.target.reset();
            }}
          >
            <input
              style={{ textAlign: "center" }}
              type="email"
              name="subscriber"
              placeholder="Enter your email"
              required
            />
            {isLoading ? (
              <div style={{ textAlign: "center" }}>
                <Spinner
                  variant="danger"
                  animation="border"
                  size="sm"
                  role="status"
                />
              </div>
            ) : (
              <button type="submit">Subscribe</button>
            )}
            <br />
            {/* {error ? (
              <Alert size="sm" variant="danger">
                {error}
              </Alert>
            ) : null}
            {msg ? (
              <Alert size="sm" variant="success">
                {msg}
              </Alert>
            ) : null} */}
            {error ? <span style={{ color: "#dc3545" }}>{error}</span> : null}
            {msg ? <span style={{ color: "#28a745" }}>{msg}</span> : null}
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>&#169; 2020 copyright all right reserved</p>
      </div>
    </div>
  );
};
export default Footer;
