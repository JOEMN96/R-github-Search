import React from "react";
import InfoCard from "./InfoCards";
import Search from "./Search";
import User from "./UserCard";
import { appContext } from "../../context/context";
import { Skeleton } from "@material-ui/lab";

export default function Home() {
  const { isLoading } = React.useContext(appContext);
  if (isLoading) {
    return (
      <div className="main-Wrapper">
        <Search />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Skeleton variant="rect" height={86} />
            </div>
            <div className="col-md-3">
              <Skeleton variant="rect" height={86} />
            </div>
            <div className="col-md-3">
              <Skeleton variant="rect" height={86} />
            </div>
            <div className="col-md-3">
              <Skeleton variant="rect" height={86} />
            </div>
          </div>
          <Skeleton />
          <div className="row">
            <div className="col">
              <Skeleton variant="rect" height={200} />
            </div>
            <div className="col">
              <Skeleton variant="rect" height={200} />
            </div>
          </div>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </div>
      </div>
    );
  }
  return (
    <div className="main-Wrapper">
      <Search />
      <InfoCard />
      <User />
    </div>
  );
}
