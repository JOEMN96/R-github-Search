import React from "react";
import { appContext } from "../../context/context";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GoLogoGist } from "react-icons/go";

export default function InfoCard() {
  const { githubUserData } = React.useContext(appContext);
  const { public_repos, followers, following, public_gists } = githubUserData;

  // Structuring Data

  let userData = [
    {
      id: 1,
      icon: <RiGitRepositoryLine className="repos icon" />,
      label: "Repostries",
      value: public_repos,
      color: "green",
    },
    {
      id: 2,
      icon: <FiUsers className="followers icon" />,
      label: "Followers",
      value: followers,
      color: "pink ",
    },
    {
      id: 3,
      icon: <RiUserFollowLine className="following icon" />,
      label: "Following",
      value: following,
      color: "red",
    },
    {
      id: 4,
      icon: <GoLogoGist className="gists icon" />,
      label: "Gists",
      value: public_gists,
      color: "blue ",
    },
  ];

  // Mapping Logged User details in card

  let mappedItems = userData.map((item) => {
    return (
      <div key={item.id} className="col">
        <div className="info-card">
          {item.icon}
          <div className="card-info-Inner">
            <h3>{item.label}</h3>
            <p>{item.value ? item.value : "0"}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row">{mappedItems}</div>
      </div>
    </div>
  );
}
