import styles from "../styles/TopInfo.module.scss"

export default function TopInfo(){
    return (
        <div className={styles.mainContainer}>
            <img className={styles.img} src="src\assets\images\grid.png" alt="Airbnb grid image" />
            <div className={styles.bottomContainer}>
                <h2 className={styles.title}>Online Experiences</h2>
                <p className={styles.description}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}