import React from "react";
import { Genres } from "../../models/movies";
import GenreListItem from "./genre-list-item";

type Props = {
	genre: Genres;
};
const Sidebar: React.FC<Props> = ({ genre }) => {
	return (
		<div>
			<div className="w-1/5 fixed overflow-y-auto bottom-0 left-0 top-20 h-screen bg-slate-300 round shadow-md p-10 z-50">
				<h1 className="text-secondary text-3xl font-semibold pt-2 pb-1">Categories</h1>
				{genre?.genres &&
					genre?.genres.map((genre: any) => (
						<GenreListItem key={genre.id} genre={genre} />
					))}
			</div>
		</div>
	);
};

export default Sidebar;
