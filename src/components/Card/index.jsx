import style from "./Card.module.scss"


const Card = () =>{
return(
    <>
    <h1>
      Please, insert your credicard
        
    </h1>
    <div className={style.Card}>
        <label htmlFor="cardName">CARDHOLDER NAME</label>
        <input id="cardName" type="text" placeholder="e.g. Carolina Médici"/> <br></br>
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input id="cardNumber" type="number" placeholder="e.g. 1234 1235 7896 4585"/>
        <label  htmlFor="expDate">EXP. DATE (MM/YY)</label>
        <input id="month" type="number" placeholder="MM"/>
        <input id="year" type="number" placeholder="YY"/>
        <label htmlFor="CVC">CVC</label>
        <input id="cardNumber" type="number" placeholder="e.g. 123"/>
    </div>
    </>
)
}

export default Card