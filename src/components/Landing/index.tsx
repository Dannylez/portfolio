import { About } from '../About';
import { Presentation } from '../Presentation';
import { Projects } from '../Projects';
import { Tags } from '../Tags';
import styles from './landing.module.css';

function Landing() {
	return (
		<div className={styles.landing}>
			<Presentation />
			<About />
			<Tags />
			<Projects />
			{/* <section className={styles.work}>
          <div className={styles.left}>
            <div className={styles.coffee}>
              <div className={styles.steam}>
                <img className={`${styles.coffeeSteam} ${styles.steam1}`} src='steam.png'/>
                <img className={`${styles.coffeeSteam} ${styles.steam2}`} src='steam.png'/>
                <img className={`${styles.coffeeSteam} ${styles.steam3}`} src='steam.png'/>
              </div>
              <img className={styles.cup} src='cup2.png'/>
            </div>
            <a className={styles.contactBtn} href="mailto:dlezama0796@gmail.com?subject=Let's work together!&body=Hi, Daniel, hope this email finds you well.">Contact me</a>
          </div>
          <div className={styles.right}>
            <div className={styles.workText}>
                <h2 className={styles.title}>Let's work <strong>together</strong></h2>
                <p>Each project enriches me and drives me to keep learning in this exciting world. I'm open to proposals that challenge my abilities, and I'm ready to work with you on your next project. Let's talk and see how I can help you achieve your goals! - <strong>the wilder, the better.</strong></p>
            </div>
          </div>
        </section> */}
			{/* <section className={styles.projects}>
          <h2 className={styles.title}><strong>Projects</strong></h2>
          <div className={styles.card}>

          </div>
        </section> */}
		</div>
	);
}

export default Landing;
