import styles from './App.scss'
import Navbar from "./components/Navbar"
import TopInfo from "./components/TopInfo"
import Carousell from "./components/Carousell"

export default function App(){
  return (
    <div>
      <Navbar />
      <TopInfo />
      <Carousell />
    </div>
  )
}
