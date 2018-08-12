export function fetchMovie({ query, page }) {
	return fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=547ddc7d3c7598eb0dbf44623c45069f&query=${query}&page=${page}`,
	)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(`Error while fetching ${response.statusText}`);
		})
		.then(data => {
			const dataItems = data.results.map(dataItem => ({
				id: dataItem.id,
				image: dataItem.poster_path,
				title: dataItem.title,
				overview: dataItem.overview,
				release: dataItem.release_date,
				rating: dataItem.vote_average,
			}));

			return dataItems;
		})
		.catch(err => console.log(err));
}

export function fetchMovieCategories({ query, page }) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${query}?api_key=547ddc7d3c7598eb0dbf44623c45069f&page=${page}`,
	)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(`Error while fetching ${response.statusText}`);
		})
		.then(data => {
			const dataItems = data.results.map(dataItem => ({
				id: dataItem.id,
				image: dataItem.poster_path,
				title: dataItem.title,
				overview: dataItem.overview,
				release: dataItem.release_date,
				rating: dataItem.vote_average,
			}));

			return dataItems;
		})
		.catch(err => console.log(err));
}
