// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Instruments
import homeImage from 'assets/video_camera.svg';
import styles from './styles/Home.css';

const homeLinks = [
	{
		text: 'If you wish to learn more about Movie Mate visit',
		link_text: 'About Page',
		path: '/about',
	},
	{
		text: 'Or start browsing right now in',
		link_text: 'Movie Gallery',
		path: '/movies',
	},
];

const homeText = homeLinks.map(homeLink => (
	<p key={homeLink.path} className={styles.text}>
		{homeLink.text}{' '}
		<Link to={homeLink.path} className={styles.link}>
			{homeLink.link_text}
		</Link>
	</p>
));

const Home = ({ title }) => (
	<div className={styles.home}>
		<svg className={styles.image}>
			<use href={`${homeImage}#video`} />
		</svg>
		<h1 className={styles.title}>{title}</h1>
		<p className={styles.text}>
			This is a single page application that lets you manage all kinds of
			movies.
		</p>
		{homeText}
	</div>
);

Home.propTypes = {
	title: PropTypes.string,
};

Home.defaultProps = {
	title: '',
};

export default Home;
