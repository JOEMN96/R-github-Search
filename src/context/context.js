import React, { createContext } from "react";
import MgithubUserData from "./mockData.js/mockUser";
import MgithubRepos from "./mockData.js/mockRepos";
import MgithubFollowers from "./mockData.js/mockFollowers";

var appContext = createContext();

const Provider = ({ children }) => {
  const [githubUserData, setGithubUserData] = React.useState(MgithubUserData);
  const [githubRepos, setGithubRepos] = React.useState(MgithubRepos);
  const [githubFollowers, setGithubFollowers] = React.useState(
    MgithubFollowers
  );

  return (
    <appContext.Provider
      value={{ githubUserData, githubRepos, githubFollowers }}
    >
      {children}
    </appContext.Provider>
  );
};

export { Provider, appContext };
