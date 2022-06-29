import type { NextPage } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { Genre, Genres, MovieData } from "../models/movies";
import { getMovieByGenre, getMovieData, searchMoviesByTitle } from "../services/fetch-data";
import Header from "../templates/header";
import Movies from "../templates/movies";
import Sidebar from "../templates/sidebar";

type Props = {
	movies: MovieData;
	genreList: Genres;
	searchedMovies: MovieData;
};
const Home: NextPage<Props> = ({ movies, genreList, searchedMovies }) => {
	const router = useRouter();

	const { data, isLoading } = useQuery<Genres>("genres", getMovieData, {
		initialData: genreList,
	});

	const { data: movieData } = useQuery<MovieData>(
		["movies", router.query.genre],
		() => getMovieByGenre(router.query.genre),
		{ initialData: movies, refetchOnWindowFocus: false }
	);

	const { data: searchResults } = useQuery<MovieData>(
		["search", router.query.title],
		() => searchMoviesByTitle(router.query.title),
		{ initialData: searchedMovies, refetchOnWindowFocus: false }
	);

	if (isLoading) {
		return <div className="font-title text-secondary">Loading...</div>;
	}
	return (
		<div className="font-body">
			<Sidebar genre={data as Genres} />
			<Header />
			<Movies data={movieData as MovieData} searchResults={searchResults as MovieData} />
		</div>
	);
};

export default Home;

export const getServerSideProps = async (context: any) => {
	const { genre, title } = context?.query;
	const movies = await getMovieByGenre(genre);
	const genreList = await getMovieData();
	const searchedMovies = await searchMoviesByTitle(title ? title : " ");
	return {
		props: {
			movies,
			genreList,
			searchedMovies,
		},
	};
};
