import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./components/blog/Blog";
import SinglePost from "./components/blog/SinglePost";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import ResetPassword from "./components/auth/ResetPassword";
import EmailVerification from "./components/auth/EmailVerification";
import ChangePassword from "./components/auth/ChangePassword";
import Signup from "./components/auth/Signup";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import createPost from "./components/blog/createPost";
import postsByCategory from "./components/blog/category";
import SearchPosts from "./components/blog/category";
import BigFooter from "./components/BigFooter";
import NotFound from "./components/404.js";
import ConfirmEmail from "./components/auth/ConfirmEmail";
import Profile from "./components/profile/Profile.js";
import Comments from "./components/blog/Comments";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" exact component={Home}></Route>
          <Route exact path="/profile/:username" component={Profile}></Route>
          <Route
            exact
            path="/account/verify/:id/:token"
            component={ConfirmEmail}
          ></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/notfound" component={NotFound}></Route>
          <Route
            exact
            path="/blog/posts?:query=:value"
            component={Blog}
          ></Route>

          <Route exact path="/blog/post/:id" component={SinglePost}></Route>
          <Route
            exact
            path="/blog/category/:category"
            component={postsByCategory}
          ></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/post" component={createPost}></Route>
          <Route exact path="/password/reset" component={ResetPassword}></Route>
          <Route
            exact
            path="/password/reset/:id/:token"
            component={ChangePassword}
          ></Route>
          <Route
            exact
            path="/account/verify/:email"
            component={EmailVerification}
          ></Route>
          <Route exact path="/comments" component={Comments}></Route>
        </Switch>
        <BigFooter />
        <Footer />
      </Router>
    );
  }
}

export default App;
