import { useState } from 'react';
import styles from './header.module.css';

function Header() {
	const [navOpen, setNavOpen] = useState(false);
	const isNavShowed = navOpen
		? styles.isNavShowed
		: styles.isNavNotShowed;

	const openNav = () => {
		setNavOpen(!navOpen);
		console.log(navOpen, isNavShowed);
	};

	return (
		<header className={styles.container}>
			<div>
				{/* <button
					className={styles.menuButton}
					onClick={() => openNav()}
				>
					Menu
				</button> */}
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
			{/* <div className={`${styles.navBar} ${isNavShowed}`}>
				<ol className={styles.list}>
					<li>Home</li>
					<li>Projects</li>
				</ol>
			</div> */}
		</header>
	);
}

export default Header;
