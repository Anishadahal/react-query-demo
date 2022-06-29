import React from "react";
import { MovieData } from "../../models/movies";
import Search from "../search";
import FeaturedMovies from "./featured-movies.tsx";

type Props = {
	data?: MovieData;
	searchResults?: MovieData;
};
const Movies: React.FC<Props> = ({ data, searchResults }) => {
	const movies = searchResults || data;
	return (
		<>
			<div className="flex justify-between relative">
				<div className="w-3/12"></div>
				<div className="container px-2 md:px-4 pb-2 mx-auto max-w-5xl">
					<div className="text-center py-10 md:py-14">
						<h1 className="text-3xl md:text-5xl font-bold text-primary font-title">
							{!searchResults?.results?.length ? "Featured Movies" : "Search Results"}
							<br />
						</h1>
						<Search />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 ">
						{movies?.results &&
							movies?.results?.map((movie) => (
								<div key={movie.id}>
									<FeaturedMovies movie={movie} />
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
};
export default Movies;
