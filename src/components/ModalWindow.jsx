import { useContext } from "react"
import { CardIndexContext } from "../App"

import data from "../data"
import styles from "../styles/ModalWindow.module.scss"

export default function ModalWindow({ backdropDisplay, setBackdropDisplay }) {
    
    const { cardIndex } = useContext(CardIndexContext)
    
    {/*Close modal*/ }
    
    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
            setBackdropDisplay("none")
        }
    })

    function onCloseRequest() {
        setBackdropDisplay("none")
    }

    return (
        <>
            <div className={styles.backdrop} style={{display:backdropDisplay}}>
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <img className={styles.contentImg} src="src\assets\images\katie-zaferes.jpg" alt="Cover image" />
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.closeContainer}>
                            <img className={styles.closeBtn} src="src\assets\images\close.png" alt="Close logo" onClick={onCloseRequest}/>
                        </div>
                        <div className={styles.contentText}>
                            <h1>{`${data[cardIndex].title}`}</h1>
                            <h4>{`${data[cardIndex].location}`}</h4>
                            <p>{`${data[cardIndex].description}`}</p>
                        </div>
                        <button className={styles.reserveBtn} >Reserve</button>
                    </div>
                </div>
            </div>  
        </>
    )
}