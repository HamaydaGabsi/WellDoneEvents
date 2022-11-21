import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ card }) => {
  return (
    <div className="card-container ">
      <div className=" shadow-cover  d-flex">
        <div className="cardtitle title">{card.title}</div>
      </div>
      <div className="bg-image">
        <img src={card.image} alt="" />
      </div>
    </div>
  );
};

export default ServiceCard;
