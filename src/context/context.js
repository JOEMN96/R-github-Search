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
  const [isLoading, setloading] = React.useState(false);
  const [error, setError] = React.useState({ condition: true, msg: "" });

  //FETCH request (Rate Limit)

  async function fetchRequest() {
    let res = await fetch(`${rootUrl}/rate_limit`);
    let data = await res.json();
    setRequest(data.rate.remaining);
    return data;
  }

  //FETCH request (To grab all details about an user)

  const searchUser = async function (user) {
    setloading(true);
    // Fetch user information
    const res = await fetch(`${rootUrl}/users/${user}`);
    let data = res.json();
    data
      .then((user) => {
        if (user) {
          setGithubUserData(user);
          const { login, followers_url } = user;
          // FETCH follwers
          const followersList = async function () {
            let res = await fetch(followers_url);
            let data = await res.json();
            setGithubFollowers(data);
          };
          // FETCH Repos
          const reposList = async function () {
            let res = await fetch(
              `${rootUrl}/users/${login}/repos?per_page=100 `
            );
            let data = await res.json();
            setGithubRepos(data);
          };
          followersList();
          reposList();
          throwError();
          fetchRequest();
          setloading(false);
        }

        if (user.message === "Not Found") {
          throwError(true, "User Is Not Found !");
        }
      })
      .catch((err) => console.log(err));

    // Set Error If user is not found
  };

  // UseEffect

  useEffect(() => {
    fetchRequest().then((data) => {
      if (data.rate.remaining === 0) {
        // thorow an error if remaing Req is 0
        throwError(true, "You exceeded You Hourly Limit !");
      }
      setRequest(data.rate.remaining);
    });
  }, []);

  // Error Function
  function throwError(condition = false, msg = "") {
    setError({ condition, msg });
  }

  return (
    <appContext.Provider
      value={{
        githubUserData,
        githubRepos,
        githubFollowers,
        request,
        error,
        searchUser,
        isLoading,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export { Provider, appContext };
