// Core
import React from 'react';
import PropTypes from 'prop-types';
// Instruments
import styles from './styles.css';

const Sidebar = ({ children }) => (
	<div className={styles.sidebar}>{children}</div>
);

Sidebar.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
};

Sidebar.defaultProps = {
	children: [],
};

export default Sidebar;
