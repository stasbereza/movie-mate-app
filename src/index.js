import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './theme/init.css';

const root = document.querySelector('#root');

ReactDOM.render(
	<BrowserRouter basename="/movie-mate-app/build">
		<App />
	</BrowserRouter>,
	root,
);
