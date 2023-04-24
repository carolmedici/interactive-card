import style from "./Card.module.scss"


const Card = () =>{
return(
    <>
    <form action="">
        
    <div className={style.Card}>

    <h1>
      Please, insert your credicard
        
    </h1>

        <div className={style.Card__inputWraper}>
            <label htmlFor="cardName">CARDHOLDER NAME</label>
            <input id="cardName" type="text" placeholder="e.g. Carolina Médici" required/>
        </div>
        <div className={style.Card__inputWraper}>
            <label htmlFor="cardNumber">CARD NUMBER</label>
            <input id="cardNumber" type="number" placeholder="e.g. 1234 1235 7896 4585" required/>
        </div>
        <div className={style.Card__inputCode}>
            <div className={style.Card__inputExpDate}>
                <label  htmlFor="expDate">EXP. DATE (MM/YY)</label>
                <div className={style.Card__date}>
                    <input id="month" type="number" placeholder="MM" required/>
                    <input id="year" type="number" placeholder="YY" required/>
                </div>
                </div>
            <div className={style.Card__inputCVC}>
                <label htmlFor="CVC">CVC</label>
                <input id="CVC" type="number" placeholder="e.g. 123" required/>
            </div>
        </div>

        </div>
        <button className={style.button} type="submit">Submit</button>
    </form>
    </>
)
}

export default Card