import styles from './about.module.css';

export function About() {
	return (
		<div className={styles.about}>
			<div className={styles.text}>
				<h2 className={styles.title}>ABOUT ME</h2>
				<div className={styles.paragraph}>
					<p>
						Hello, my name is Daniel Lezama, and I am 28
						years old. I was a chemical engineering student
						until I obtained an intermediate degree.
					</p>
					<p>
						Three years ago, I discovered my passion for
						programming, which has captivated me and keeps
						me in a continuous process of learning. For over
						six months, I have been working independently,
						finding clients, and managing the entire process
						on my own as a Full-Stack Developer.
					</p>
					<p>
						I am eager to find a permanent position in a
						company that will keep me motivated to continue
						learning and facing new challenges. If you
						believe I could be a good fit for your team, I
						would love to hear from you.
					</p>
					<p>Thank you,</p>
					<p>Daniel Lezama</p>
				</div>
				<a
					className={styles.contactMe}
					href="mailto:dlezama0796@gmail.com?subject=Let's work together!&body=Hi, Daniel, hope this email finds you well."
				>
					CONTACT ME
				</a>
			</div>
			<div className={styles.photoContainer}>
				<img
					className={styles.photo}
					src="/my-photo.jpeg"
				/>
				<div className={styles.container}>
					<a
						className={styles.logoContainer}
						href="https://github.com/Dannylez"
						target="_blank"
					>
						<img
							className={styles.logo}
							src="/logos/github.png"
						/>
					</a>
					<a
						className={styles.logoContainer}
						href="https://www.linkedin.com/in/daniel-lezama96"
						target="_blank"
					>
						<img
							className={styles.logo}
							src="/logos/linkedin.png"
						/>
					</a>
					<a
						className={styles.logoContainer}
						href="https://wa.me/+59893498556"
						target="_blank"
					>
						<img
							className={styles.logo}
							src="/logos/whatsapp.png"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
