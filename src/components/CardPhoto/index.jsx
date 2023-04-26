import React from "react";
import cardFront from "./bg-card-front.png";
import cardBack from "./bg-card-back.png";
import style from "./CardPhoto.module.scss";
import CardOverlay from "../CardOverlay";

const CardPhoto = ({ isCardFlipped, cardNumber, cardName, expMonth, expYear, cvc }) => {
  const cardClasses = [style.card];

  if (isCardFlipped) {
    cardClasses.push(style.flipped);
  }

  const formattedCardNumber = cardNumber
    .replace(/(\d{4})/g, "$1 ")
    .trim()
    .replace(/\s/g, "\u00A0");

  return (
    <div className={style.cardContainer}>
      <div className={cardClasses.join(" ")}>
        <CardOverlay
          cardNumber={formattedCardNumber}
          cardName={cardName}
          expMonth={expMonth}
          expYear={expYear}
          cvc={cvc}
        />
        <img src={cardFront} className={style.cardFront} alt="Card front" />
        <img src={cardBack} className={style.cardBack} alt="Card back" />

        <div className={`${style.cardNumber} ${style.cardSide}`}>
          {formattedCardNumber.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>

        <div className={`${style.cardHolder} ${style.cardSide}`}>
          <span>{cardName}</span>
        </div>

        <div className={`${style.cardExpiration} ${style.cardSide}`}>
          <span>{expMonth}</span>
          <span></span>
          <span>{expYear}</span>
        </div>

        <div className={`${style.cardCvc} ${style.cardSide}`}>
          <span>{cvc}</span>
        </div>
      </div>
    </div>
  );
};

export default CardPhoto;