import styles from './header.module.css';

function Header() {
	return (
		<header className={styles.container}>
			<div>
				<div className={styles.hireMe}>
					<img
						className={styles.hireMeImg}
						src="hire-me.png"
					/>
					<a href="mailto:dlezama0796@gmail.com?subject=Let's work together!&body=Hi, Daniel, hope this email finds you well.">
						Hire me
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
