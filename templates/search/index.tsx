import React from "react";

const Search = () => {
	return (
		<>
			<p className="text-primary max-w-xs mx-auto py-6 ">
				Find your favorite movie with just one search!
			</p>
			<input
				className="bg-background px-8 py-2 rounded-3xl shadow-inner focus:outline-none focus:ring-1 ring-secondary "
				type="text"
				placeholder="Search..."
			/>
		</>
	);
};

export default Search;
