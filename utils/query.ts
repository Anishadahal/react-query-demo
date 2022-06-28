export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default {
	fetchTrending: {
		title: "Top Rated",
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	fetchTopRated: {
		title: "Top Rated",
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	fetchActionMovie: {
		title: "Action",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	fetchComedyMovie: {
		title: "Comedy",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
};
