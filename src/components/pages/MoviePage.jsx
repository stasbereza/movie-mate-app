// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Instruments
import styles from './styles/MoviePage.css';

const MoviePage = ({ image, title, overview, release, rating }) => (
	<div className={styles.moviePage}>
		<img
			className={styles.image}
			src={`https://image.tmdb.org/t/p/w300/${image}`}
			alt={title}
		/>
		<div className={styles.content}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.overview}>Overview: {overview}</p>
			<p className={styles.rating}>Rating: {rating}</p>
			<p className={styles.release}>Release: {`${release.slice(0, 4)}`}</p>
		</div>
		<Link to="/movies" className={styles.link}>
			close
		</Link>
	</div>
);

MoviePage.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	overview: PropTypes.string,
	release: PropTypes.string,
	rating: PropTypes.number,
};

MoviePage.defaultProps = {
	image: '',
	title: '',
	overview: '',
	release: '',
	rating: null,
};

export default MoviePage;
