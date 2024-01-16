import { useContext } from "react"
import { CardContext } from "./CardContextProvider"

const Card = () => {
    const {cardName, cardNumber, date} = useContext(CardContext)
    console.log(cardName)
    
    return(
        <div style={{width: 100, height: 100, backgroundColor: 'red', color: 'white'}}>
        <h3>{cardName}</h3>
        <p>{cardNumber}</p>
        <p>{date}</p>
   </div>
    )
}
export default Card