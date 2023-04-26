import { useState } from "react";
import style from "./Card.module.scss";
import CardPhoto from "../CardPhoto";

const Card = () => {
    const [isCardFlipped, setIsCardFlipped] = useState(false);
    const [showFrontCard, setShowFrontCard] = useState(true);
    const [cardInfo, setCardInfo] = useState({
      cardName: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    });
  
    const handleCvcFocus = () => {
      setIsCardFlipped(true);
      setShowFrontCard(false);
    };
  
    const handleOtherFocus = () => {
      setIsCardFlipped(false);
      setShowFrontCard(true);
    };
  
    const handleChange = (event) => {
      const { id, value } = event.target;
      setCardInfo((prev) => ({ ...prev, [id]: value }));
    };
  
    return (
      <>
        <CardPhoto
          isCardFlipped={isCardFlipped}
          showFrontCard={showFrontCard}
          cardNumber={cardInfo.cardNumber}
          expMonth={cardInfo.expMonth}
          expYear={cardInfo.expYear}
          cvc={cardInfo.cvc}
        >
       
        </CardPhoto>
  
        <form action="">
          <div className={style.Card}>
            <h1>Please insert your credit card</h1>
  
            <div className={style.Card__inputWraper}>
              <label htmlFor="cardName">CARDHOLDER NAME</label>
              <input
                id="cardName"
                type="text"
                placeholder="e.g. Carolina Médici"
                onFocus={handleOtherFocus}
                onChange={handleChange}
                minLength={8}
                maxLength={20}
                required
              />
            </div>
  
            <div className={style.Card__inputWraper}>
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <input
                 id="cardNumber"
                 type="text"
                 placeholder="e.g. 1234 1235 7896 4585"
                 onFocus={handleOtherFocus}
                 onChange={handleChange}
                 maxLength={16}
                 pattern="^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$"
                 required
              />
            </div>
  
            <div className={style.Card__inputCode}>
              <div className={style.Card__inputExpDate}>
                <label htmlFor="expDate">EXP. DATE (MM/YY)</label>
                <div className={style.Card__date}>
                <input
                id="month"
                type="text"
                placeholder="MM"
                onFocus={handleOtherFocus}
                onChange={handleChange}
                pattern="[0-9]{2}"
                maxLength={2}
                required
                />

                <input
                  id="year"
                  type="text"
                  placeholder="YY"
                  onFocus={handleOtherFocus}
                  onChange={handleChange}
                  pattern="[0-9]{2}"
                  maxLength={2}
                  required
                />
              </div>
            </div>

            <div className={style.Card__inputCVC}>
              <label htmlFor="CVC">CVC</label>
              <input
                id="CVC"
                type="text"
                placeholder="e.g. 123"
                onFocus={handleCvcFocus}
                onChange={handleChange}
                pattern="[0-9]{3}"
                maxLength={3}
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
