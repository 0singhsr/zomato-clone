import React from "react";
import "./Card.scss";
import Dine from "../../assets/images/Dine-Out.png";
import Night from "../../assets/images/Night-Life.png";
import Online from "../../assets/images/Online-Food.png";

const Card = () => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={Dine} alt="dineImg" />
        <h1>Order Online</h1>
        <span>Stay home and order to your doorstep</span>
      </div>
      
      <div className="cardImg">
        <img src={Online} alt="onlineImg" />
        <h1>Dining</h1>
        <span>Views the city's favourite dining venues</span>
      </div>
      <div className="cardImg">
        <img src={Night} alt="nightImg" />
        <h1>Live Events</h1>
        <span>Discover India's est events & concerts</span>
      </div>

    </div>
  );
};

export default Card;