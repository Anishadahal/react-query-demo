import Router, { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Genre, MovieData } from "../../../models/movies";

type Props = {
	genre: Genre;
};
const GenreListItem: React.FC<Props> = ({ genre }) => {
	const router = useRouter();

	const handleClick = (id: number) => {
		router.push({ pathname: "/", query: { genre: id } });
	};

	return (
		<div key={genre.id} className="py-2">
			<a
				className="text-primary hover:text-secondary text-xl font-title cursor-pointer"
				onClick={() => handleClick(genre.id)}
			>
				{genre.name}
			</a>
		</div>
	);
};

export default GenreListItem;
