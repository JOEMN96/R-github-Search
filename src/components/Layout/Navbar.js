import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar ">
        <Link className="navbar-brand" to="/">
          GitHub Search
        </Link>

        <a href="!#">LogOut</a>
      </nav>
    );
  }
}
