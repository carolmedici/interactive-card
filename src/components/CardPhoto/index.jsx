import React from "react";
import cardFront from "./bg-card-front.png";
import cardBack from "./bg-card-back.png";
import style from "./CardPhoto.module.scss";

const CardPhoto = ({ isCardFlipped }) => {
  const cardClasses = [style.card];

  if (isCardFlipped) {
    cardClasses.push(style.flipped);
  }

  return (
    <div className={style.cardContainer}>
      <div className={cardClasses.join(" ")}>
        <img src={cardFront} className={style.cardFront} alt="Card front" />
        <img src={cardBack} className={style.cardBack} alt="Card back" />
      </div>
    </div>
  );
};

export default CardPhoto;
