import React from "react";
import InfoCard from "./InfoCards";
import Search from "./Search";
import User from "./UserCard";

export default function Home() {
  return (
    <div className="main-Wrapper">
      <Search />
      <InfoCard />
      <User />
    </div>
  );
}
