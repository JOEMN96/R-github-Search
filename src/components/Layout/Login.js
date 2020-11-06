import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect, user, isLoading } = useAuth0();
  console.log(isLoading);

  return (
    <div id="login-card" className="card">
      <div className="card-body">
        <div className="loginIcon">
          <FaUserSecret />
        </div>
        <h2 className="text-center">Log In</h2>
        <br />

        <button
          id="button"
          className="btn btn-primary deep-purple btn-block "
          onClick={loginWithRedirect}
        >
          LogIn
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}
