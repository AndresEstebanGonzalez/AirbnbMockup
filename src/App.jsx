import { useState , createContext ,useContext } from "react"

import styles from './App.scss'
import Navbar from "./components/Navbar"
import TopInfo from "./components/TopInfo"
import Carousell from "./components/Carousell"
import ModalWindow from "./components/ModalWindow"

export const CardIndexContext = createContext(null);

export default function App() {
  
  const [backdropDisplay, setBackdropDisplay] = useState("none")
  const [cardIndex, setCardIndex] = useState("")
  
  return (
    <CardIndexContext.Provider value={{ cardIndex, setCardIndex }}>
    <Navbar />
    <TopInfo />
    <ModalWindow backdropDisplay={backdropDisplay} setBackdropDisplay={setBackdropDisplay} />
    <Carousell setBackdropDisplay={setBackdropDisplay} />
    </CardIndexContext.Provider>
  )
}
