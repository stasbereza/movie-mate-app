// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
// Instruments
import styles from './SearchForm.css';

const INITIAL_STATE = {
	text: '',
};

export default class SearchForm extends Component {
	static propTypes = {
		onSearchFormSubmit: PropTypes.func,
	};

	static defaultProps = {
		onSearchFormSubmit: () => null,
	};

	state = { ...INITIAL_STATE };

	handleInputChange = ({ target }) => {
		const name = target.name;
		const value = target.value;

		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();

		if (this.state.text === '') {
			return;
		}

		this.props.onSearchFormSubmit(this.state.text);

		this.setState({ ...INITIAL_STATE });
	};

	render() {
		const { text } = this.state;

		return (
			<form onSubmit={this.handleSubmit} className={styles.searchForm}>
				<Input
					cls={styles.input}
					name="text"
					value={text}
					placeholder="Search for movie by name..."
					onChange={this.handleInputChange}
				/>
				<Button text="search" type="submit" cls={styles.button} />
			</form>
		);
	}
}
