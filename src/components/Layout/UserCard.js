import React from "react";
import { appContext } from "../../context/context";
import FollowersCard from "./FollowersCard";
import { AiOutlineLink } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import DonutChart from "./charts/Donut";

function UserCard() {
  let { githubUserData } = React.useContext(appContext);
  const {
    avatar_url,
    bio,
    blog,
    name,
    twitter_username,
    html_url,
  } = githubUserData;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 ">
          <div className="cardComp">
            <div className="cardProf">
              <div className="cardMain">
                <img src={avatar_url} alt="" />
              </div>
              <div className="profileDetail">
                <h5>{name}</h5>
                <p> @{twitter_username || "NotAvailabe"}</p>
              </div>
              <div className="followBtnParent">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="followBtn"
                  href={html_url}
                >
                  Follow
                </a>
              </div>
            </div>
            <div className="bioTExt">
              <p>
                <FcAbout /> {bio || "Sorry No Bio !"}
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href={blog}>
                  <AiOutlineLink className="linkIcon" />
                  {blog || "Sorry No Porfolio"}
                </a>
              </p>
            </div>
          </div>
          <div className="PieChartCOntainer">
            <DonutChart />
          </div>
        </div>
        <div className="col-md-6 cardComp followersMAinParent">
          <FollowersCard />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
