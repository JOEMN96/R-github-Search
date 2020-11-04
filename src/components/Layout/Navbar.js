import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavBarComponent() {
  const {
    isLoading,
    error,
    isAuthenticated,
    loginWithRedirect,
    logOut,
    user,
  } = useAuth0();

  console.log(user);

  return (
    <nav className="navbar ">
      <Link className="navbar-brand" to="/">
        GitHub Search
      </Link>

      <button onClick={loginWithRedirect}>LogIn</button>
    </nav>
  );
}

export default NavBarComponent;
