import { useRouter } from "next/router";
import React from "react";
const Search = () => {
	const router = useRouter();
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		router.push({
			pathname: "/",
			query: {
				title: e.target[0].value,
			},
		});
	};

	return (
		<>
			<p className="text-primary max-w-xs mx-auto py-6 ">
				Find your favorite movie with just one search!
			</p>
			<form onSubmit={handleSubmit}>
				<input
					className="bg-background px-8 py-2 rounded-3xl shadow-inner focus:outline-none focus:ring-1 ring-secondary "
					type="text"
					placeholder="Search..."
				/>
			</form>
		</>
	);
};

export default Search;
