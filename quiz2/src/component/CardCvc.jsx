import { useContext } from "react"
import { CardContext } from "./CardContextProvider"

const CardCvc = () => {
    const {cvc} = useContext(CardContext)
    return(
       
       <div style={{width: 200, height: 200, backgroundColor: 'green', color: 'white'}}>
            <h3>cvc:{cvc}</h3>
       </div>
    )
}
   
export default CardCvc