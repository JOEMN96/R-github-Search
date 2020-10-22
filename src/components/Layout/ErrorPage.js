import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <section className="ErrorPage">
        <div className="errorImg">
          <Link to="/">
            <button className="bactoHmBTN waves-effect waves-light btn">
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
