import type { NextPage } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { MovieData } from "../models/movies";
import Header from "../templates/header";
import Movies from "../templates/movies";
import requests from "../utils/query";

const Home: NextPage = () => {
	const router = useRouter();
	const genre: any = router.query.genre;
	const { data, isLoading, isFetching, error } = useQuery<MovieData>("movies", () =>
		getMovieData({ genre })
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isFetching) {
		return <div>Fetching...</div>;
	}
	if (error) {
		return <div>Something went wrong!</div>;
	}
	return (
		<div className="font-body">
			<Header />
			<Movies data={data} />
		</div>
	);
};

export default Home;

const getMovieData = async ({ genre }: { genre: string }) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}${
			requests[genre as keyof typeof requests]?.url || requests?.fetchTrending?.url
		}`
	).then((res) => res.json());
	return response;
};

export const getServerSideProps = async (context: any) => {
	const { genre } = context.query || "";
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery<MovieData>("movies", () => getMovieData({ genre }));
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
