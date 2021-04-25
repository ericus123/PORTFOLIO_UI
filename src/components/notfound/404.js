import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div id="notfound">
      <div class="notfound">
      <div class="notfound-404"></div>
      <h1>404</h1>
      <h2>Oops! Page Not Be Found</h2>
      <p>Sorry but the page you are looking for does not exist. It might have been removed, changed or is temporarily unavailable</p>
      <Link to={"/"} >Back to homepage</Link>
      </div>
      </div>
    );
  }
}
export default NotFound;
