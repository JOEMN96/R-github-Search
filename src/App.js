import React from "react";
import NavBar from "./components/Layout/Navbar";
import ErrorPage from "./components/Layout/ErrorPage";
import Login from "./components/Layout/Login";
import Home from "./components/Layout/home";
import PrivateRoute from "./components/Layout/PrivateRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthWrapper from "./components/Layout/AuthWrapper";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <NavBar />
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
