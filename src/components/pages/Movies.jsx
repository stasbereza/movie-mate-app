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
		currentCategory: 'popular',
		currentPage: 1,
	};

	componentDidMount() {
		fetchMovieCategories({
			query: this.state.currentCategory,
			page: this.state.currentPage,
		}).then(movieCategory => {
			this.setState({
				movielist: movieCategory,
				watchlist:
					JSON.parse(localStorage.getItem('watchlist-movie-mate-app')) || [],
			});
		});
	}

	searchForMovie = query => {
		this.setState({
			currentCategory: '',
			currentPage: 1,
		});

		fetchMovie({ query }).then(movie => {
			this.setState({
				movielist: movie,
				currentPage: 1,
			});
		});
	};

	showMoreMovies = (query, currentPage) => {
		this.setState(prevState => ({
			currentPage: prevState.currentPage + 1,
		}));

		fetchMovieCategories({ query, page: currentPage }).then(movie => {
			this.setState({
				movielist: [...this.state.movielist, ...movie],
			});
		});
	};

	searchForMovieCategory = query => {
		this.setState({
			currentPage: 1,
		});

		fetchMovieCategories({ query, page: 1 }).then(movieCategory => {
			this.setState({
				movielist: movieCategory,
				currentCategory: query,
			});
		});
	};

	showMoreMoviesOnCategory = (query, currentPage) => {
		fetchMovieCategories({ query, page: currentPage }).then(movieCategory => {
			this.setState(prevState => ({
				movielist: [...this.state.movielist, ...movieCategory],
				currentPage: prevState.currentPage + 1,
			}));
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

		if (this.state.watchlist.find(movietoWatch => movietoWatch.id === id)) {
			return;
		}

		this.setState({
			watchlist: [...this.state.watchlist, watchlistCard],
		});
		localStorage.setItem(
			'watchlist-movie-mate-app',
			JSON.stringify([...this.state.watchlist, watchlistCard]),
		);
	};

	deleteMovieCardFromWatchlist = id => {
		this.setState({
			watchlist: this.state.watchlist.filter(
				watchlistCard => watchlistCard.id !== id,
			),
		});
		const parsedLSItem = JSON.parse(
			localStorage.getItem('watchlist-movie-mate-app'),
		);
		const filteredLSItem = parsedLSItem.filter(
			watchlist => watchlist.id !== id,
		);
		localStorage.setItem(
			'watchlist-movie-mate-app',
			JSON.stringify([...filteredLSItem]),
		);
	};

	render() {
		const { movielist, watchlist, currentCategory, currentPage } = this.state;

		return (
			<div className={styles.movies}>
				<Sidebar>
					<SearchForm
						currentCategory={currentCategory}
						onSearchFormSubmit={this.searchForMovie}
					/>
					<SearchCategoies
						currentCategory={currentCategory}
						onSearchBtnClick={this.searchForMovieCategory}
					/>
					<Watchlist
						watchlistCards={watchlist}
						onDeleteFromWatchlist={this.deleteMovieCardFromWatchlist}
					/>
				</Sidebar>
				<MovieListContainer
					{...this.props}
					movieCards={movielist}
					currentPage={currentPage}
					currentCategory={currentCategory}
					onShowMoreMovies={this.showMoreMovies}
					onShowMoreMoviesOnCategory={this.showMoreMoviesOnCategory}
					onAddToWatchlist={this.addMovieCardToWatchlist}
				/>
			</div>
		);
	}
}

export default Movies;
