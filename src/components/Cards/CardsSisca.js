import styles from './Cards.module.css';
import sisca from '../../assets/sisca.png'

export function CardsSisca() {
    return (
        <div className={styles.container}>
            <img src={sisca} alt="imagen sisca" className={styles.card_image}/>
            <p>Portal Sisca</p>
            <a href='https://test-portal-sisca.pantheonsite.io/' target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
    )
}