import React from "react";
import logo from "../images/logo.png";

import "./ComingSoon.css";
const ComingSoon = () => {
  return (
    <div
      class="bgimg"
      style={{
        backgroundColor: "#00004d",
        height: "100vh",
        width: "100%",
        position: "relative",
        margin: 0,
        color: "white",
        fontSize: "25px",
      }}
    >
      <div class="middle">
        <img src={logo} alt="logo" style={{ height: "30vh" }} />
        <hr />
        <h1 style={{ fontWeight: "bold" }}>COMING SOON</h1>
        <hr />
      </div>
    </div>
  );
};
export default ComingSoon;
