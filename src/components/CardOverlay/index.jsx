import React from "react";
import style from "./CardOverlay.module.scss";

const CardOverlay = ({ cardNumber, cardName, expMonth, expYear, cvc }) => {
  return (
    <div className={style.cardOverlay}>
      <div className={style.cardNumber}>{cardNumber}</div>
      <div className={style.cardName}>{cardName}</div>
      <div className={style.expDate}>{expMonth}/{expYear}</div>
      <div className={style.cvc}>{cvc}</div>
    </div>
  );
};

export default CardOverlay;
