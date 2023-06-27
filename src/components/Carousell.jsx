import Card from "./Card.jsx"
import styles from "../styles/Carousell.module.scss"
import data from "../data.jsx"


export default function Carousell() {
    
    const cards = data.map(item => {
        return(
        <Card
            key={item.id}
            item={item}
            />
            )
    })

    return (
        <div className={styles.container}>
            {cards}
        </div>
    )
}