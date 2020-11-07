import React from "react";
import NavBar from "./components/Layout/Navbar";
import ErrorPage from "./components/Layout/ErrorPage";
import Login from "./components/Layout/Login";
import Home from "./components/Layout/home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
