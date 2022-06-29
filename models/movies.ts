export interface Results {
	id: number | string;
	media_type: string;
	backdrop_path: string;
	poster_path: string;
	title: string;
	overview: string;
	release_date: string;
	name?: string;
}
export interface MovieData {
	page: number;
	results: Results[];
	total_pages: number;
	total_results: number;
}

export interface Genres {
	genres: Genre[];
}
export interface Genre {
	id: number;
	name: string;
}
