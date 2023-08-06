import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Card from "./Card";

const PopularCard = (props) => {
  const goTo = () => {
    Navigate(props.points);
  };
  return (
    <>
      <div id="cardSection">
        <div className="cHead">
          <h3>Popular Products</h3>
          <div className="allP">See All Categories</div>
        </div>
         <div className="pcardBdy">
           <Card img="image/Greetings-card.png" title="Greeting Cards" price="19,000" amount="per 50" press="Browse Greeting Car..."/>
           <Card img="image/stickers.png" title="Stickers" price="5,400" amount="per 75" press="Browse Stickers"/>
         </div>
      </div>
    </>
  );
};

export default PopularCard;
