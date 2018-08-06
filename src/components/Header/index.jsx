// Core
import React from 'react';
// Components
import Logo from 'components/Logo';
import Navbar from 'components/Navbar';
// Instruments
import styles from './styles.css';

const Header = () => (
	<header className={styles.header}>
		<Logo text="movie mate" />
		<Navbar />
	</header>
);

export default Header;
