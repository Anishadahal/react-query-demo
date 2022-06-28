import Image from "next/image";
import React from "react";
import { Results } from "../../../models/movies";

type Props = {
	movie: Results;
};
const TitleImage: React.FC<Props> = ({ movie }) => {
	const imageBasePath = "https://image.tmdb.org/t/p/original";

	return (
		<div>
			<Image
				src={imageBasePath + movie.backdrop_path || movie.poster_path}
				alt=""
				height={200}
				width={200}
			/>
		</div>
	);
};

export default TitleImage;
