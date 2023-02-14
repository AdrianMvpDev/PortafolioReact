import styles from './Cards.module.css';
import sisca from '../../assets/surti.png'

export function CardsSurti() {
    return (
        <div className={styles.container}>
            <img src={sisca} alt="imagen surtimayorista" className={styles.card_image}/>
            <p>Surtimayorista</p>
            <a href='https://www.surtimayorista.com/' target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
    )
}