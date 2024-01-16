// import { useState } from 'react'

import './App.css'
import Card from './component/Card'
import CardCvc from './component/CardCvc'

import InputCardForm from './component/InputCardForm'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <InputCardForm/>
     <Card/>
     <CardCvc/>
     
    </>
  )
}

export default App
// import { createContext, useState } from "react";
 
// export const RedContext = createContext();
 
// const pricesList=[
//   {
//     packageType: 'Basic',
//     price: "$19",
//     annualPrice: "$100"
//   },
//   {
//     packageType: 'Professional',
//     price: "$24",
//     annualPrice: "$150"
//   },
//   {
//     packageType: 'Master',
//     price: "$39",
//     annualPrice: "$200"
//   },
// ]
 
// const RedContextProvider =({children})=>{
//   const [isRed, setIsRed] = useState(false)
 
//   const valueToBePassed={
//     isRed:isRed,
//     setIsRed: setIsRed,
//     pricesList
//   }
 
//   return(
//     <RedContext.Provider value={valueToBePassed}>
//       {children}
//     </RedContext.Provider>
//   )
// }
 
// export default RedContextProvider

// import './App.css'
// import Box from './component/Box'
 
// import { useContext } from 'react'
// import { RedContext } from './context/RedContextProvider'
// import RandomComp from './component/RandomComp'
 
// function App() {
//   const {pricesList} = useContext(RedContext)
 
 
//   return (
//     <div className="App">
//       <RandomComp/>
//       {
//         pricesList.map((list)=>{
//           return <Box key={list.packageType} {...list}/>
//         })
//       }
      
//     </div>
//   )
// }
 
// export default App

// import { useContext } from "react"
// import { RedContext } from "../context/RedContextProvider"
 
// const Box =({packageType,price, annualPrice})=>{
//   const {isRed} = useContext(RedContext)
 
//   return(
//     <div
//       style={{height:200, width:200, backgroundColor:'aqua', margin:30}}
//     >
//       <h2>{packageType}</h2>
//       <h1>{isRed === true ? price : annualPrice}</h1>
//     </div>
//   )
// }
 
// export default Box

// import { useContext } from "react"
// import { RedContext } from "../context/RedContextProvider"
 
// const RandomComp=()=>{
//   const {setIsRed, isRed} = useContext(RedContext)
 
 
//   return(
//     <button onClick={()=>setIsRed((prev)=>!prev)}>{!isRed ? "annual" : "monthly"}</button>
//   )
// }
 
// export default RandomComp
