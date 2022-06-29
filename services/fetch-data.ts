const api_key = process.env.NEXT_PUBLIC_API_KEY;
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

//Get movies by genre
export const getMovieByGenre = async (movieId: any) => {
	const movies = await fetch(
		`${base_url}/discover/movie?api_key=${api_key}&with_genres=${movieId}
        `
	).then((res) => res.json());
	return movies;
};

//Get genre list
export const getMovieData = async () => {
	const response = await fetch(
		`${base_url}/genre/movie/list?api_key=${api_key}&language=en-US
        `
	).then((res) => res.json());
	return response;
};

//Search Movies by name
export const searchMoviesByTitle = async (title: any) => {
	const response = await fetch(
		`${base_url}/search/movie?api_key=${api_key}&language=en-US&query=${title}&page=1&include_adult=false
        `
	).then((res) => res.json());
	return response;
};
