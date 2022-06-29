import type { NextPage } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { Genres, MovieData } from "../models/movies";
import { getMovieByGenre, getMovieData, searchMoviesByTitle } from "../services/fetch-data";
import Header from "../templates/header";
import Movies from "../templates/movies";
import Sidebar from "../templates/sidebar";

const Home: NextPage = () => {
	const router = useRouter();
	const { data, isLoading } = useQuery<Genres>("genres", () => getMovieData());

	const { data: movieData } = useQuery<MovieData>(
		["movies", router.query.genre],
		() => getMovieByGenre(router.query.genre),
		{
			refetchOnWindowFocus: false,
		}
	);

	const { data: searchResults } = useQuery<MovieData>(
		["search", router.query.title],
		() => searchMoviesByTitle(router.query.title),
		{
			refetchOnWindowFocus: false,
		}
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

export const getServerSideProps = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery<MovieData>("genres", getMovieData);
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
