import React from "react";
import "./stud-card.css";
import Group from "../assets/Group.svg";

function StudCard({ img, color }) {
  return (
    <div className="stud-card" style={{ backgroundColor: color }}>
      <img className="stud-img" src={img} alt="A sample image" />
    </div>
  );
}

export default StudCard;
