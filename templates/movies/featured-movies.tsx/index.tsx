import React from "react";
import { Results } from "../../../models/movies";
import TitleImage from "../title-image.tsx";

type Props = {
	movie: Results;
};
const FeaturedMovies: React.FC<Props> = ({ movie }) => {
	return (
		<div className="border border-gray-100 rounded-2xl overflow-hidden transition duration-200 hover:shadow-lg hover:border-transparent mx-3 my-1">
			<div className="flex flex-wrap">
				<TitleImage movie={movie} />
				<div className="px-4 pb-6">
					<h2 className="text-primary text-xl font-bold font-title py-3 hover:text-secondary transition duration-200">
						{movie?.title || movie?.name}
					</h2>
					<p className="text-general pb-5">{movie?.overview}</p>
					<div className="flex items-center">
						<div className="pl-3 text-xs">
							{movie?.release_date && (
								<p className="text-general">Released at {movie?.release_date}</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedMovies;
