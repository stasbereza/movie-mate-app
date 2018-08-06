// Core
import React from 'react';
import PropTypes from 'prop-types';
// Instruments
import styles from './styles.css';

const Logo = ({ text }) => <h1 className={styles.logo}>{text}</h1>;

Logo.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Logo;
