import React from "react";
import "./scss/styles.scss";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { subscribeNewsletter } from "../redux/actions/subscriptions/newsLetter";
import newsletter_image from "../assets/img/newsletter.svg";

const NewsLetter = () => {
  const msg = useSelector((state) => state.subscribeNewsletter.msg);
  const email = useSelector((state) => state.subscribeNewsletter.email);
  const isLoading = useSelector((state) => state.subscribeNewsletter.isLoading);
  const error = useSelector((state) => state.subscribeNewsletter.error);
  const dispatch = useDispatch();

  return (
    <div className="news-letter-wrapper">
      <div className="news-left">
        <h1>
          Subscribe to our <br />
          newsletter
        </h1>
        <p>
          {" "}
          Subscribe to get access to thousands of exclusive tech news and
          tutorials right to your inbox.
        </p>
        {!error && !msg && !isLoading ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              dispatch(subscribeNewsletter(e.target.subscriber.value));
              e.target.reset();
            }}
          >
            <input
              type="email"
              name="subscriber"
              placeholder="Email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        ) : null}

        {isLoading ? (
          <div style={{ textAlign: "center" }}>
            <Spinner
              animation="border"
              size="sm"
              role="status"
              style={{ color: "#6c63ff" }}
            />
          </div>
        ) : null}
        {error ? <span style={{ color: "#dc3545" }}>{error}</span> : null}
        {msg ? <span style={{ color: "#28a745" }}>{msg}</span> : null}
      </div>
      <img style={{ margin: "10%" }} src={newsletter_image} />
    </div>
  );
};

export default NewsLetter;
