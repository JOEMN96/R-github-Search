import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavBarComponent() {
  const {
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
  } = useAuth0();

  console.log({ isAuthenticated, isLoading, user });

  const isUser = isAuthenticated && user;

  return (
    <nav className="navbar ">
      <Link className="navbar-brand" to="/">
        GitHub Search
      </Link>
      <div className="logInOutParent">
        {isUser && user.name && (
          <h5 className="userName"> Hello, {user.name.toUpperCase()}</h5>
        )}
        {isUser && user.picture && (
          <img className="img-circle" src={user.picture} alt="userprofile" />
        )}
        {isUser ? (
          <button
            className="followBtn"
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            Log out
          </button>
        ) : (
          <button className="followBtn" onClick={loginWithRedirect}>
            LogIn
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBarComponent;
