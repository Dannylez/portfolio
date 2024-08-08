import styles from './presentation.module.css';

export function Presentation() {
	return (
		<div className={styles.presentation}>
			<h1 className={styles.title}>DANIEL LEZAMA</h1>
			<p className={styles.paragraph}>
				I'm an independent creative developer from
				Montevideo, Uruguay
			</p>
		</div>
	);
}
