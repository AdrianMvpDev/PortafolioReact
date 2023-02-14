import styles from './Header.module.css';
import avatar from '../assets/avatar.jpg';
import { LinkedIn } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export function Header() {
  const [element1, setElement1] = useState(false);
  const [element2, setElement2] = useState(false);

  const handleClick = () => {
    setElement1(!element1);
    setElement2(!element2);
  };
  
  return (
    <header className={`header ${styles.header}`}>
      <picture>
        <img src={avatar} alt="imagen perfil" className={styles.header_image} />
      </picture>
      <ul className={`${element2 ? 'active' : ''} ${styles.list_menu}`}>
        <li className={styles.list_item}>
          <a href="#about"  onClick={handleClick}>About</a>
        </li>
        <li className={styles.list_item}>
          <a href="#projects" onClick={handleClick}>Projects</a>
        </li>
        <li className={styles.list_item}>
          <a href="#contact" onClick={handleClick}>Contact</a>
        </li>
      </ul>
      <div className={styles.linkedin}>
        <IconButton color="secondary" className={styles.list_button}>
          <a href="https://www.linkedin.com/in/adrian-santamaria-1aabb71ab/" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </IconButton>
      </div>
      <div className={`${element1 ? 'active' : ''} ${styles.menu_hamburguesa}`}
      onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
