import React from "react";
import { appContext } from "../../context/context";

function FollowersCard() {
  const { githubFollowers } = React.useContext(appContext);

  return (
    <div>
      <h4 className="mb-5">Followers</h4>
      {githubFollowers.map((followers) => {
        const { avatar_url, login, html_url } = followers;
        console.log(followers);
        return (
          <div key={html_url} className="followerCard">
            <img src={avatar_url} alt={login} />
            <div className="followerDetail">
              <h5>{login}</h5>
              <p> {html_url} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FollowersCard;
