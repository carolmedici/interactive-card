import { useState } from "react";
import style from "./Card.module.scss";
import CardPhoto from "../CardPhoto";

const Card = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [showFrontCard, setShowFrontCard] = useState(true);

  const handleCvcFocus = () => {
    setIsCardFlipped(true);
    setShowFrontCard(false);
  };

  const handleOtherFocus = () => {
    setIsCardFlipped(false);
    setShowFrontCard(true);
  };

  return (
    <>
      <CardPhoto isCardFlipped={isCardFlipped} showFrontCard={showFrontCard} />

      <form action="">
        <div className={style.Card}>
          <h1> Please, insert your credit card </h1>

          <div className={style.Card__inputWraper}>
            <label htmlFor="cardName">CARDHOLDER NAME</label>
            <input
              id="cardName"
              type="text"
              placeholder="e.g. Carolina Médici"
              onFocus={handleOtherFocus}
              required
            />
          </div>

          <div className={style.Card__inputWraper}>
            <label htmlFor="cardNumber">CARD NUMBER</label>
            <input
              id="cardNumber"
              type="number"
              placeholder="e.g. 1234 1235 7896 4585"
              onFocus={handleOtherFocus}
              required
            />
          </div>

          <div className={style.Card__inputCode}>
            <div className={style.Card__inputExpDate}>
              <label htmlFor="expDate">EXP. DATE (MM/YY)</label>
              <div className={style.Card__date}>
                <input
                  id="month"
                  type="number"
                  placeholder="MM"
                  onFocus={handleOtherFocus}
                  required
                />

                <input
                  id="year"
                  type="number"
                  placeholder="YY"
                  onFocus={handleOtherFocus}
                  required
                />
              </div>
            </div>

            <div className={style.Card__inputCVC}>
              <label htmlFor="CVC">CVC</label>
              <input
                id="CVC"
                type="number"
                placeholder="e.g. 123"
                onFocus={handleCvcFocus}
                required
              />
            </div>
          </div>
        </div>
        <button className={style.button} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Card;
