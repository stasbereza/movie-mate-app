// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Instruments
import styles from './styles.css';

const NotFound = ({ text }) => (
	<div className={styles.notFound}>
		<h1 className={styles.message}>{text}</h1>
		<Link to="/movies" className={styles.link}>
			close
		</Link>
	</div>
);
NotFound.propTypes = {
	text: PropTypes.string.isRequired,
};

export default NotFound;
