// Core
import React from 'react';
import PropTypes from 'prop-types';
// Components
import Button from 'components/shared/Button';
// Instruments
import styles from './MovieCard.css';

const MovieCard = ({ image, title, overview, release, rating, onAddCard }) => (
	<div className={styles.card}>
		<span className={styles.rating}>{rating}</span>
		<img
			className={styles.image}
			src={`https://image.tmdb.org/t/p/w300/${image}`}
			alt={title}
		/>
		<h2 className={styles.title}>{title}</h2>
		<p className={styles.overview}>{`${overview.slice(0, 150)}...`}</p>
		<p className={styles.release}>Release: {`${release.slice(0, 4)}`}</p>
		<Button text="+" onClick={onAddCard} cls={styles.button} />
	</div>
);

MovieCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	overview: PropTypes.string,
	release: PropTypes.string,
	rating: PropTypes.number,
	onAddCard: PropTypes.func,
};

MovieCard.defaultProps = {
	image: '',
	title: '',
	overview: '',
	release: '',
	rating: null,
	onAddCard: () => null,
};

export default MovieCard;
