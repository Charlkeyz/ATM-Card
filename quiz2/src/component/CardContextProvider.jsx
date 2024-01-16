/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CardContext = createContext();



const CardContextProvider = ({children}) => {
    const [cardNumber, setCardNumber] = useState("")
    const [cardName, setCardName] = useState("")
    const [cvc, setCvc] = useState("")
    const [date, setDate]= useState("")

    const valueToBePassed = {
        cardNumber: cardNumber,
        setCardNumber: setCardNumber,
        cardName: cardName,
        setCardName: setCardName,
        cvc: cvc,
        setCvc: setCvc,
        date: date,
        setDate: setDate
    }
    return(
        <CardContext.Provider value={valueToBePassed}>
            {children}
        </CardContext.Provider>
    )
}
export default CardContextProvider