//Get movies by genre
export const getMovieByGenre = async (movieId: any) => {
	const movies = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${movieId}
        `
	).then((res) => res.json());
	return movies;
};

//Get genre list
export const getMovieData = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&&language=en-US
        `
	).then((res) => res.json());
	return response;
};
