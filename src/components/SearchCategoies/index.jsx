// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Button from 'components/shared/Button';
// Instruments
import styles from './styles.css';

const queryCategories = ['popular', 'top_rated', 'upcoming'];

export default class SearchCategoies extends Component {
	static propTypes = {
		onSearchBtnClick: PropTypes.func,
	};

	static defaultProps = {
		onSearchBtnClick: () => null,
	};

	handleClick = ({ target }) => {
		event.preventDefault();

		const name = target.name;

		const query = name;

		this.props.onSearchBtnClick(query);
	};

	render() {
		const searchButtons = queryCategories.map(queryCategory => {
			const btnText =
				queryCategory === 'top_rated'
					? queryCategory.replace('_', ' ')
					: queryCategory;
			return (
				<Button
					key={queryCategory}
					name={queryCategory}
					text={btnText}
					onClick={this.handleClick}
					cls={styles.button}
				/>
			);
		});

		return <div className={styles.searchCategories}>{searchButtons}</div>;
	}
}
