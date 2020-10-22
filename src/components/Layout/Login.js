import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <div id="login-card" class="card">
      <div className="card-body">
        <h2 className="text-center">Login form</h2>
        <br />
        <form action="">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="email"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <button
            type="submit"
            id="button"
            className="btn btn-primary deep-purple btn-block "
          >
            Submit
          </button>
          <br />
          <br />

          <div id="btn" className="text-center">
            <button type="button" className="btn btn-danger btn-circle btn-sm ">
              <i className="fa fa-google">
                <FaGoogle />
              </i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
