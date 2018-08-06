// Core
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
// Components
import Header from 'components/Header';
import Home from 'components/pages/Home';
import Movies from 'components/pages/Movies';
import About from 'components/pages/About';
// Instruments
import styles from './styles.css';

const App = () => (
	<div className={styles.app}>
		<Header />
		<Switch>
			<Route
				path="/home"
				render={props => <Home {...props} title="Welcome to Movie Mate" />}
			/>
			<Route path="/movies" component={Movies} />
			<Route path="/about" component={About} />
			<Redirect to="/home" />
		</Switch>
	</div>
);

export default hot(module)(App);
