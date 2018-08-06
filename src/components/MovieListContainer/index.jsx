// Core
import React from 'react';
// Components
import MovieList from 'components/MovieList';
// Instruments
import styles from './styles.css';

const MovieListContainer = ({ ...props }) => (
	<div className={styles.movieListContainer}>
		<MovieList {...props} />
	</div>
);

export default MovieListContainer;
