// Core
import React from 'react';
import PropTypes from 'prop-types';
// Components
import WatchlistCard from 'components/WatchlistCard';
// Instruments
import styles from './styles.css';

const Watchlist = ({ watchlistCards, onDeleteFromWatchlist }) => {
	const watchlistMovieCards = watchlistCards.map(watchlistCard => (
		<WatchlistCard
			key={watchlistCard.id}
			{...watchlistCard}
			onRemoveCard={() => {
				onDeleteFromWatchlist(watchlistCard.id);
			}}
		/>
	));

	return (
		<div className={styles.watchlist}>
			<h3 className={styles.title}>watchlist</h3>
			{watchlistCards.length > 0 ? (
				watchlistMovieCards
			) : (
				<p className={styles.message}>Add movies to watchlist...</p>
			)}
		</div>
	);
};

Watchlist.propTypes = {
	watchlistCards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			image: PropTypes.string,
			title: PropTypes.string,
			release: PropTypes.string,
			rating: PropTypes.number,
		}),
	),
	onDeleteFromWatchlist: PropTypes.func,
};

Watchlist.defaultProps = {
	watchlistCards: [],
	onDeleteFromWatchlist: () => null,
};

export default Watchlist;
