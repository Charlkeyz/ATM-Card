/* eslint-disable no-undef */
import { useContext } from "react"
import { CardContext } from "./CardContextProvider"

const InputCardForm = () => {
    const {cvc, date, cardNumber, cardName, setCardName, setCardNumber, setDate, setCvc} = useContext(CardContext)
    

    function handleEvent(e){
       const {name, value} = e.target
       if(name === "cardName"){
        setCardName(value)
       }else if(name === "cardNumber"){
        setCardNumber(value)
       }else if(name === "cvc"){
        setCvc(value)
       }else if(name === "date"){
        setDate(value)
       }
    
    }
    return(
        <>
            <label htmlFor="card">
                Card Holder Name
            </label>
            <input  name="cardName" placeholder="card name" onInput={handleEvent} value={cardName} />
            <label htmlFor="card">
                Card Number
            </label>
            <input type="number" name="cardNumber" placeholder="card number" onInput={handleEvent} value={cardNumber}/>
            <label htmlFor="card">
                Date
            </label>
            <input type="date" name="date" placeholder="date" onInput={handleEvent} value={date}/>
            <label htmlFor="card">
                CVC
            </label>
            <input type="number" name="cvc" placeholder="e.g 123" onInput={handleEvent} value={cvc}/>
            





        </>
    )
}
export default InputCardForm