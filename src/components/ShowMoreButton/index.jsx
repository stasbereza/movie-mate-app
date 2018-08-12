// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Button from 'components/shared/Button';
// Instruments
import styles from './ShowMoreButton.css';

export default class ShowMoreButton extends Component {
	static propTypes = {
		btnText: PropTypes.string.isRequired,
		currentPage: PropTypes.number.isRequired,
		currentCategory: PropTypes.string.isRequired,
		onShowMoreMovies: PropTypes.func,
		onShowMoreMoviesOnCategory: PropTypes.func,
	};

	static defaultProps = {
		onShowMoreMovies: () => null,
		onShowMoreMoviesOnCategory: () => null,
	};

	handleClick = event => {
		event.preventDefault();

		const {
			currentPage,
			currentCategory,
			onShowMoreMovies,
			onShowMoreMoviesOnCategory,
		} = this.props;

		if (this.props.currentCategory !== '') {
			onShowMoreMoviesOnCategory(currentCategory, currentPage + 1);
		} else {
			onShowMoreMovies(currentPage);
		}
	};

	render() {
		const { btnText } = this.props;

		return (
			<Button text={btnText} onClick={this.handleClick} cls={styles.button} />
		);
	}
}
