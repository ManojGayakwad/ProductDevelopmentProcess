import React from "react";
import "./styles.css";
import img1 from "./snipet.png";
import img2 from "./snipet2.png";

const TopHeading = () => {
  return (
    <div className="top">
      <div className="circle">
        <img src={img1} alt="logo" />
        <p className="firstName">DAIPL</p>
        <img className="img2" src={img2} alt="logo" />
      </div>
      <p>Product development process</p>
    </div>
  );
};

export default TopHeading;
