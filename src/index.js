import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={window.location.origin}
  >
    <Provider>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
