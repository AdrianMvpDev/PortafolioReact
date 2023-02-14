import { useEffect } from 'react';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Projects } from '../pages/Projects';
import styles from './Article.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function Article() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <article className={styles.article}>
      <div className={styles.container} id="about">
        <About />
      </div>
      <div data-aos="fade-in" id="projects" className={styles.container}>
        <Projects />
      </div>
      <div data-aos="fade-in" id="contact" className={styles.container}>
        <Contact />
      </div>
    </article>
  );
}
