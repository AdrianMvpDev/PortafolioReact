import styles from './Cards.module.css';
import sisca from '../../assets/fanaticos.png'

export function CardsFanaticos() {
    return (
        <div className={styles.container}>
            <img src={sisca} alt="imagen fanaticos" className={styles.card_image}/>
            <p>Fanaticos de las mascotas</p>
            <a href='https://www.fanaticosdelasmascotas.com/' target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
    )
}