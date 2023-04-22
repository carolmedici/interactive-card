import Card from "../Card"
import CardPhoto from "../CardPhoto"
import style from "./HomePage.module.scss"


const HomePage = () =>{
    return(
       
<main className={style.homepage}>
    
           <CardPhoto />
           <Card />
</main>

       
    )
}

export default HomePage