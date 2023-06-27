import data from "../data"
import styles from "../styles/Card.module.scss"

export default function Card(props) {

    const openSpots = props.item.openSpots ? `${props.item.location}` : "SOLD OUT"

    return (
        <>
            <div className={styles.card}>
                <div className={styles.topContainer}>
                    <div className={styles.availability}>{openSpots}</div>
                    <img className={styles.coverImg} src="src\assets\images\katie-zaferes.jpg" alt="Cover Image" />
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.rating}>
                        <img src="src\assets\images\star.png" alt="" className={styles.star} />
                        <p className={styles.grey}>({props.item.stats.reviewCount}) · ({props.item.location})</p>
                    </div>
                    <p className={styles.title}>{props.item.title}</p>
                    <p className={styles.price}><b>From ${props.item.price}</b> / person</p>
                </div>
            </div>
        </>
    )
}