// Core
import React from 'react';
import PropTypes from 'prop-types';
// Components
import MovieCard from 'components/MovieCard';
// Instruments
import styles from './styles.css';

const MovieList = ({ movieCards, onAddToWatchlist }) => (
	<div className={styles.movieList}>
		{movieCards.map(movieCard => (
			<div key={movieCard.id} className={styles.movieListItem}>
				<MovieCard
					{...movieCard}
					onAddCard={() => {
						onAddToWatchlist(movieCard);
					}}
				/>
			</div>
		))}
	</div>
);

MovieList.propTypes = {
	movieCards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			image: PropTypes.string,
			title: PropTypes.string,
			overview: PropTypes.string,
			release: PropTypes.string,
			rating: PropTypes.number,
		}),
	),
	onAddToWatchlist: PropTypes.func,
};

MovieList.defaultProps = {
	movieCards: [],
	onAddToWatchlist: () => null,
};

export default MovieList;
