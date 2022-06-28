import React from "react";
import { MovieData } from "../../models/movies";
import TitleImage from "./title-image.tsx";

type Props = {
	data?: MovieData;
};
const Movies: React.FC<Props> = ({ data }) => {
	return (
		<>
			<div>
				{data?.results.map((movie) => (
					<>
						<h2>{movie.title || movie.name}</h2>
						<TitleImage movie={movie} />
					</>
				))}
			</div>
		</>
	);
};
export default Movies;
