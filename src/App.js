import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Blog from "./Blog";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/blog" component={Blog}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
