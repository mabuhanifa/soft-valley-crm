import React, { useState } from "react";
import SideBar from "./SideBar";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="home">
      <div className="side">
        <SideBar />
      </div>
      <div className="adminContainer">
        <div></div>
        <div>
          <form onSubmit={logIn}>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}
