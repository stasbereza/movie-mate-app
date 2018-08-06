// Core
import React, { Component } from 'react';
// Components
import Sidebar from 'components/Sidebar';
import SearchForm from 'components/SearchForm';
import SearchCategoies from 'components/SearchCategoies';
import Watchlist from 'components/Watchlist';
import MovieListContainer from 'components/MovieListContainer';
// Instruments
import { fetchMovie, fetchMovieCategories } from 'utils/API';
import styles from './styles/Movies.css';

class Movies extends Component {
	state = {
		movielist: [],
		watchlist: [],
	};

	componentDidMount() {
		fetchMovieCategories('popular').then(movieCategory => {
			this.setState({
				movielist: movieCategory,
			});
		});
	}

	searchForMovie = query => {
		fetchMovie(query).then(movie => {
			this.setState({
				movielist: movie,
			});
		});
	};

	searchForMovieCategory = query => {
		fetchMovieCategories(query).then(movieCategory => {
			this.setState({
				movielist: movieCategory,
			});
		});
	};

	addMovieCardToWatchlist = ({ id, image, title, release, rating }) => {
		const watchlistCard = {
			id,
			image,
			title,
			release,
			rating,
		};

		if (this.state.watchlist.find(movieCard => movieCard.id === id)) {
			return;
		}

		this.setState({
			watchlist: [...this.state.watchlist, watchlistCard],
		});
	};

	deleteMovieCardFromWatchlist = id => {
		this.setState({
			watchlist: this.state.watchlist.filter(movieCard => movieCard.id !== id),
		});
	};

	render() {
		const { movielist, watchlist } = this.state;

		return (
			<div className={styles.movies}>
				<Sidebar>
					<SearchForm onSearchFormSubmit={this.searchForMovie} />
					<SearchCategoies onSearchBtnClick={this.searchForMovieCategory} />
					<Watchlist
						watchlistCards={watchlist}
						onDeleteFromWatchlist={this.deleteMovieCardFromWatchlist}
					/>
				</Sidebar>
				<MovieListContainer
					movieCards={movielist}
					onAddToWatchlist={this.addMovieCardToWatchlist}
				/>
			</div>
		);
	}
}

export default Movies;
