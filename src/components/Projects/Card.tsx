import { useState } from 'react';
import styles from './projects.module.css';

interface Project {
	name: string;
	description: string;
	images: string[];
	tech?: string[];
	link: string;
}

export function Card(project: Project) {
	const [display, setDisplay] = useState(project.images[1]);

	const handleMouseHover1 = (imageUrl: string) => {
		setDisplay(imageUrl);
	};

	return (
		<a
			href={project.link}
			target="_blank"
			className={styles.card}
		>
			<div>
				<h4 className={styles.projectName}>
					{project.name}{' '}
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 24 24"
						className={styles.link}
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
						<path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
					</svg>
				</h4>
				<p className={styles.paragraph}>
					{project.description}
				</p>
			</div>
			<div className={styles.gallery}>
				<div className={styles.carrete}>
					{project.images.map((image) => (
						<img
							className={styles.image}
							src={image}
							onMouseEnter={() => handleMouseHover1(image)}
						/>
					))}
				</div>
				<div className={styles.onDisplay}>
					<img
						className={styles.imageOnDisplay}
						src={display}
					/>
				</div>
			</div>
		</a>
	);
}
