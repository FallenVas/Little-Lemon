import React from "react";
import dishIcon from "../../../assets/Dishicon.svg";

const Card = ({ title, image, price, description }) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/3 px-4">
      <img
        className="h-64 md:max-h-64 object-cover w-full"
        src={image}
        alt={`${title}`}
      />
      <div className="flex justify-between px-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg text-primary">{price}</p>
      </div>
      <p className="text-left px-2">{description}</p>
      <button className="text-left px-2 font-semibold text-xl flex items-center gap-1">
        Order a delivery <img src={dishIcon} alt="dish icon" />
      </button>
    </div>
  );
};

export default Card;
