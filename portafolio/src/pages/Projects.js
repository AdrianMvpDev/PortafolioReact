import SimpleSlider from '../components/SimpleSlider';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.container_main}>
        <h1>W<span>o</span>rks</h1>
        <h2>Projects <span>I have worked</span> on and have been part of the <span>development team</span></h2>
        <SimpleSlider />
      </div>
    </div>
  );
}
