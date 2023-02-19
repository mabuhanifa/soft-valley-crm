import React from "react";
import SideBar from "./SideBar";

export default function Home() {
  return (
    <div className="home">
      <div className="side">
        <SideBar />
      </div>
      <div>Calender</div>
    </div>
  );
}
