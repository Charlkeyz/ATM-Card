import { useContext } from "react"
import { CardContext } from "./CardContextProvider"

const CardCvc = () => {
    const {cvc} = useContext(CardContext)
    return(
       
       <div style={{width: 100, height: 100, backgroundColor: 'green', color: 'white'}}>
            <h3>{cvc}</h3>
       </div>
    )
}
   
export default CardCvc