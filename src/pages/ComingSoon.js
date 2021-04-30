import React from "react";


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
        <img
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1619803851/radha%27s/logo_gfos58.png"
          alt="logo"
          style={{ height: "150px", width: "250px" }}
        />
        <hr />
        <h1 style={{ fontWeight: "bold" }}>COMING SOON</h1>
        <hr />
      </div>
    </div>
  );
};
export default ComingSoon;
