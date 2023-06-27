import styles from "../styles/Navbar.module.scss"

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <img className={styles.img} src="src\assets\images\airbnb-logo-10.png" />
        </div>
    )
}