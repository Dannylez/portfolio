import styles from './projects.module.css';

export function Projects() {
	return (
		<section className={styles.projects}>
			<h2 className={styles.title}>PROJECTS</h2>
			<div className={styles.container}>
				<h3 className={styles.subTitle}>
					Notable Projects
				</h3>
				<div className={styles.card}>
					<h4 className={styles.projectName}>
						Sport Center{' '}
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 24 24"
							className={styles.link}
							/* class="transition-transform ml-2 group-hover/item:translate-x-2 group-hover/item:-translate-y-2" */
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
							<path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
						</svg>
					</h4>
					<p className={styles.paragraph}>
						Developed a comprehensive web application for a
						gym using React, MongoDB, Redux, and other
						technologies. The platform primarily serves
						instructors by allowing them to manage student
						attendance, process payments, and handle class
						registrations. It features a detailed schedule
						grid displaying class timings, locations, and
						attendee lists, facilitating efficient class
						management and real-time updates.
					</p>
				</div>
				<div className={styles.card}>
					<h4 className={styles.projectName}>
						Printa{' '}
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 24 24"
							className={styles.link}
							/* class="transition-transform ml-2 group-hover/item:translate-x-2 group-hover/item:-translate-y-2" */
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
							<path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
						</svg>
					</h4>
					<p className={styles.paragraph}>
						Contributed to the design of a website for a
						printing company in Uruguay, serving as the
						liaison with the Polish development team, given
						the owner's lack of English proficiency.
						Utilized GetPrintBox, a tool for creating custom
						print product templates and managing print
						orders, to facilitate the development process
						and ensure alignment with the client's needs.
					</p>
				</div>
			</div>
		</section>
	);
}
