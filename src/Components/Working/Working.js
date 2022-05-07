import React from "react";
import "../../componentsStyles/howworks.css";
import Sections from "./Sections";
const Working = () => {
  return (
    <div className="mt-5">
      <div className="text-center text-primary">
        <p style={{ fontSize: "22px", fontWeight: "bolder" }}>Working</p>
      </div>
      <div className="text-center">
        <p
          className="Dark link"
          style={{ fontSize: "33px", fontWeight: "bolder" }}
        >
          How does it work?
        </p>
      </div>
      <div className="how-works">
        <img src={"/assets/sections.png"} style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
};

export default Working;
