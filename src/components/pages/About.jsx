// Core
import React from 'react';
// Instruments
import appFeatures from 'features.json';
import logoImage from 'assets/logo_tmdb.svg';
import styles from './styles/About.css';

const About = () => {
	const listOfFeatures = appFeatures.features.map(feature => (
		<li key={feature.id} className={styles.featureItem}>
			{feature.text}
		</li>
	));

	return (
		<div className={styles.about}>
			<p className={styles.primaryText}>
				When you first visit the Movies page, it will be automatically received
				and displayed popular movies.
			</p>
			<p className={styles.primaryText}>
				Here are the main features of the application:
			</p>
			<ul className={styles.featuresList}>{listOfFeatures}</ul>
			<svg className={styles.image}>
				<use href={`${logoImage}#logo`} />
			</svg>
			<p className={styles.secondaryText}>
				The Movie Mate application receives data from The Movie Database.
			</p>
			<p className={styles.secondaryText}>
				TMDb is a community built movie and TV database.
			</p>
			<p className={styles.secondaryText}>
				If you wish to get more information about TMDb visit{' '}
				<a className={styles.link} href="https://www.themoviedb.org">
					The Movie DB website
				</a>
			</p>
		</div>
	);
};
export default About;
