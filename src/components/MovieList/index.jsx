// Core
import React from 'react';
import PropTypes from 'prop-types';
// Components
import MovieCard from 'components/MovieCard';
import ShowMoreButton from 'components/ShowMoreButton';
// Instruments
import styles from './styles.css';

const MovieList = ({
	match,
	movieCards,
	onAddToWatchlist,
	currentPage,
	currentCategory,
	onShowMoreMovies,
	onShowMoreMoviesOnCategory,
}) => {
	const makeMovieCards = path =>
		movieCards.map(movieCard => (
			<div key={movieCard.id} className={styles.movieListItem}>
				<MovieCard
					{...movieCard}
					path={`${path}/${movieCard.id}`}
					onAddCard={() => {
						onAddToWatchlist(movieCard);
					}}
				/>
			</div>
		));

	const movieCardsList = makeMovieCards(match.path);

	return (
		<div className={styles.movieList}>
			{movieCardsList}
			<ShowMoreButton
				btnText="show more"
				currentPage={currentPage}
				currentCategory={currentCategory}
				onShowMoreMovies={onShowMoreMovies}
				onShowMoreMoviesOnCategory={onShowMoreMoviesOnCategory}
			/>
		</div>
	);
};

MovieList.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.obj,
	}).isRequired,
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
	currentPage: PropTypes.number.isRequired,
	currentCategory: PropTypes.string.isRequired,
	onAddToWatchlist: PropTypes.func,
	onShowMoreMovies: PropTypes.func,
	onShowMoreMoviesOnCategory: PropTypes.func,
};

MovieList.defaultProps = {
	movieCards: [],
	onAddToWatchlist: () => null,
	onShowMoreMovies: () => null,
	onShowMoreMoviesOnCategory: () => null,
};

export default MovieList;
