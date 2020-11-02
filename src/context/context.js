import React, { createContext, useEffect } from "react";
import MgithubUserData from "./mockData.js/mockUser";
import MgithubRepos from "./mockData.js/mockRepos";
import MgithubFollowers from "./mockData.js/mockFollowers";

const rootUrl = "https://api.github.com";

var appContext = createContext();

const Provider = ({ children }) => {
  //states

  const [githubUserData, setGithubUserData] = React.useState(MgithubUserData);
  const [githubRepos, setGithubRepos] = React.useState(MgithubRepos);
  const [githubFollowers, setGithubFollowers] = React.useState(
    MgithubFollowers
  );
  const [request, setRequest] = React.useState(0);
  const [loading, setloading] = React.useState(false);

  //FETCH request

  async function fetchRequest() {
    let res = await fetch(`${rootUrl}/rate_limit`);
    let data = await res.json();
    return data;
  }

  // UseEffect

  useEffect(() => {
    fetchRequest().then((data) => {
      if (data.rate.remaining == 0) {
        // thorow an error if remaing Req is 0
        console.log("error");
      }
      setRequest(data.rate.remaining);
    });
  }, []);

  return (
    <appContext.Provider
      value={{ githubUserData, githubRepos, githubFollowers, request }}
    >
      {children}
    </appContext.Provider>
  );
};

export { Provider, appContext };
