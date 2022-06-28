import type { NextPage } from "next";
import Header from "../templates/header";
import Movies from "../templates/movies";
import { useQuery } from "react-query";
import { MovieData } from "../models/movies";

const Home: NextPage = () => {
	const { data, isLoading, isFetching } = useQuery<MovieData>("movies", getMovieData);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<Header />
			<Movies data={data} />
		</>
	);
};

export default Home;

const getMovieData = async () => {
	const response = await fetch(
		`https://api.themoviedb.org/3/trending/all/week?api_key=b724b45115949a0d43f0c288f1345d88&language=en-US`
	).then((res) => res.json());
	return response;
};
