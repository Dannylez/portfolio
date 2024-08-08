import styles from './tags.module.css';

export function Tags() {
	return (
		<div className={styles.tags}>
			<span className={styles.spanUno}>{'{/}'}</span>
			<span className={styles.spanDos}>{'#dev'}</span>
			<span className={styles.spanTres}>
				{'#Adaptability'}
			</span>
			<span className={styles.spanCuatro}>
				{'#Problem-solving'}
			</span>
			<span className={styles.spanCinco}>
				{'#Communication'}
			</span>
			<span className={styles.spanSeis}>
				{'#Proactivity'}
			</span>
			<span className={styles.spanSiete}>
				{'#LeaderShip'}
			</span>
			<span className={styles.spanOcho}>
				{'#Flexibility'}
			</span>
			<span className={styles.spanNueve}>
				{'#Thinking'}
			</span>
			<span className={styles.spanDiez}>
				{'#Negotiation'}
			</span>
		</div>
	);
}
