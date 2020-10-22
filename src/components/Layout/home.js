import React from "react";
import InfoCard from "./InfoCards";
import User from "./UserCard";

export default function Home() {
  return (
    <div className="main-Wrapper">
      <InfoCard />

      <User />
    </div>
  );
}
