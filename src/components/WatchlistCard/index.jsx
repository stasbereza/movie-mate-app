// Core
import React from 'react';
import PropTypes from 'prop-types';
// Components
import Button from 'components/shared/Button';
// Instruments
import styles from './WatchlistCard.css';

const WatchlistCard = ({ image, title, release, rating, onRemoveCard }) => (
	<div className={styles.watchlistCard}>
		<img
			className={styles.image}
			src={`https://image.tmdb.org/t/p/w300/${image}`}
			alt={title}
		/>
		<div className={styles.body}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.release}>{`Release: ${release.slice(0, 4)}`}</p>
			<p className={styles.rating}>{`Rating: ${rating}`}</p>
		</div>
		<Button onClick={onRemoveCard} text="-" cls={styles.button} />
	</div>
);

WatchlistCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	release: PropTypes.string,
	rating: PropTypes.number,
	onRemoveCard: PropTypes.func,
};

WatchlistCard.defaultProps = {
	image: '',
	title: '',
	release: '',
	rating: '',
	onRemoveCard: () => null,
};

export default WatchlistCard;
