import Image from "next/image";
import React from "react";
import { Results } from "../../../models/movies";

type Props = {
	movie: Results;
};
const TitleImage: React.FC<Props> = ({ movie }) => {
	const imageBasePath = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

	return (
		<div className="w-full">
			<Image
				src={imageBasePath + movie.backdrop_path || movie.poster_path}
				alt=""
				height={400}
				width={650}
			/>
		</div>
	);
};

export default TitleImage;
