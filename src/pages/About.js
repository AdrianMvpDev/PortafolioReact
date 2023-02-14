import styles from './About.module.css';
import avatar from '../assets/avatar.jpg';
import cv from '../assets/HV_Adrian.pdf';
import { ParticlesBackground } from '../components/ParticlesBackground';

export function About() {
  return (
    <>
      <ParticlesBackground />
      <div className={styles.container}>
        <div className={styles.container_img}>
          <picture>
            <img src={avatar} alt="imagen perfil" className={styles.picture_image} />{' '}
          </picture>
        </div>
        <div className={styles.container_text}>
          <p>HI THERE! I'M</p>
          <span>
            <bold>ADRIAN</bold> SANTAMARIA
          </span>
          <p>
            A <bold>Front-End Web Developer</bold> passionate about creating interactive applications and experiences on the web
          </p>
          <a href={cv} download="CV Adrian Santamaria">
            CV
          </a>
        </div>
      </div>
    </>
  );
}
