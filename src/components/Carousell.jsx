import Card from "./Card.jsx"
import styles from "../styles/Carousell.module.scss"
import data from "../data.jsx"


export default function Carousell({setBackdropDisplay}) {
    
    const cards = data.map(item => {
        return(
        <Card
            key={item.id}
            item={item}
            />
            )
    })
    
    function handleClick() {
        setBackdropDisplay("flex")
    }
    return (
        <>
            <div className={styles.container} onClick={handleClick}>{cards}</div>
        </>
    )
}