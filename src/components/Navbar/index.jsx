// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
// Instruments
import styles from './styles.css';

const navLinks = [
	{
		path: '/home',
		text: 'home',
	},
	{
		path: '/movies',
		text: 'movies',
	},
	{
		path: '/about',
		text: 'about',
	},
];

const Navbar = () => (
	<ul className={styles.navbar}>
		{navLinks.map(navLink => (
			<li key={navLink.path}>
				<NavLink
					to={navLink.path}
					className={styles.link}
					activeClassName={styles.linkActive}>
					{navLink.text}
				</NavLink>
			</li>
		))}
	</ul>
);

export default Navbar;
