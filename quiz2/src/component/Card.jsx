import { useContext } from "react"
import { CardContext } from "./CardContextProvider"

const Card = () => {
    const {cardName, cardNumber, date} = useContext(CardContext)
    
    
    return(
        <div style={{width: 200, height: 200, backgroundColor: 'red', color: 'white'}}>
        <h3>Card name:{cardName}</h3>
        <p>Card number:{cardNumber}</p>
        <p>Date:{date}</p>
   </div>
    )
}
export default Card