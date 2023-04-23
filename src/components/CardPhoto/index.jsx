import cardFront from "./bg-card-front.png"
import cardBack from "./bg-card-back.png"
import style from "./CardPhoto.module.scss"

const CardPhoto = () =>{
    return(
        <>
        <div>
            <img src={cardFront} className={style.cardFront}/>
            <img src={cardBack} className={style.cardBack}/>
        </div>
        
        </>
    )
}

export default CardPhoto