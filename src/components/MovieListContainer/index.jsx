// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
// Components
import MovieList from 'components/MovieList';
import MoviePage from 'components/pages/MoviePage';
import NotFound from 'components/NotFound';
// Instruments
import styles from './styles.css';

const MovieListContainer = ({
	match,
	movieCards,
	onAddToWatchlist,
	currentPage,
	currentCategory,
	onShowMoreMovies,
	onShowMoreMoviesOnCategory,
}) => {
	const getMovieCardById = id =>
		movieCards.find(movieCard => movieCard.id === Number(id));

	return (
		<div className={styles.movieListContainer}>
			<Switch>
				<Route
					path={`${match.path}/:movieID`}
					render={props => {
						const movieId = props.match.params.movieID;
						const movie = getMovieCardById(movieId);

						return movie ? (
							<MoviePage {...movie} {...props} />
						) : (
							<NotFound text="Sorry, movie not found!" {...props} />
						);
					}}
				/>
				<Route
					path={match.path}
					render={props => (
						<MovieList
							{...props}
							movieCards={movieCards}
							onAddToWatchlist={onAddToWatchlist}
							currentPage={currentPage}
							currentCategory={currentCategory}
							onShowMoreMovies={onShowMoreMovies}
							onShowMoreMoviesOnCategory={onShowMoreMoviesOnCategory}
						/>
					)}
				/>
			</Switch>
		</div>
	);
};

MovieListContainer.propTypes = {
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

MovieListContainer.defaultProps = {
	movieCards: [],
	onAddToWatchlist: () => null,
	onShowMoreMovies: () => null,
	onShowMoreMoviesOnCategory: () => null,
};

export default MovieListContainer;
