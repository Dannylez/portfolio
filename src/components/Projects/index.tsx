import styles from './projects.module.css';
import { Card } from './Card';

export function Projects() {
	const printFlow = {
		name: 'PrintFlow',
		description:
			'Developed a full-stack web application for a printing company using React, Node.js, Express, and MongoDB. The platform enables users to create and manage product orders, track production progress through a Kanban-style task board, and store relevant documents and files using AWS S3. Features include advanced filtering and pagination for handling large datasets, user authentication with JWT, and a responsive interface built with CSS Modules and Redux for state management.',
		images: [
			'/printFlow/image1.jpeg',
			'/printFlow/image2.jpeg',
			'/printFlow/image3.jpeg',
			'/printFlow/image4.jpeg',
		],
		link: 'javascript:void(0)',
	};
	const printa = {
		name: 'Printa',
		description:
			"Contributed to the design of a website for a printing company in Uruguay, serving as the liaison with the Polish development team, given the owner's lack of English proficiency. Utilized GetPrintBox, a tool for creating custom print product templates and managing print orders, to facilitate the development process and ensure alignment with the client's needs.",
		images: [
			'/printa/image1.jpeg',
			'/printa/image3.jpeg',
			'/printa/image4.jpeg',
			'/printa/image5.jpeg',
		],
		link: 'https://printaimpresos.getprintbox.com/',
	};
	const sportCenter = {
		name: 'Sport Center',
		description:
			'Developed a comprehensive web application for	a gym using React, MongoDB, Redux, and other technologies. The platform primarily serves instructors by allowing them to manage student attendance, process payments, and handle class grid displaying class timings, locations, and attendee lists, facilitating efficient class management and real-time updates.',
		images: [
			'/sport-center/image1.jpeg',
			'/sport-center/image2.jpeg',
			'/sport-center/image3.jpeg',
			'/sport-center/image4.jpeg',
		],
		link: 'https://arena-sport-center-app.vercel.app/',
	};

	return (
		<section className={styles.projects}>
			<h2 className={styles.title}>PROJECTS</h2>
			<div className={styles.container}>
				<h3 className={styles.subTitle}>
					Notable Projects
				</h3>
				<Card {...printFlow} />
				<Card {...printa} />
				<Card {...sportCenter} />
			</div>
		</section>
	);
}
