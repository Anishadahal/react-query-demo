import React, { useState } from "react";
import {
	MdClose,
	MdCollectionsBookmark,
	MdHome,
	MdMenu,
	MdTrendingUp,
	MdVerified,
} from "react-icons/md";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	return (
		<header className="flex flex-wrap container mx-auto max-w-7xl items-center p-6 justify-between bg-white shadow-md">
			<div className="flex items-center text-secondary hover:text-primary cursor-pointer transition duration-150">
				<svg
					className="h-8 w-8 mr-2 font-extrabold text-9xl"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
					/>
				</svg>
				<span className="font-semibold text-lg font-sans">MOVIES</span>
			</div>

			<div className="md:hidden block">
				{!menuOpen ? (
					<MdMenu
						className="text-white bg-secondary hover:bg-purple-900 h-6 w-6 rounded transition"
						onClick={() => setMenuOpen(true)}
					/>
				) : (
					<MdClose
						className="text-white bg-secondary hover:bg-purple-900 h-6 w-6 rounded transition"
						onClick={() => setMenuOpen(false)}
					/>
				)}
			</div>
			<nav
				className={`${
					!menuOpen && "hidden"
				} md:flex md:items-center font-title w-full md:w-auto`}
			>
				<ul className="text-lg inline-block">
					<li className="my-3 md:my-0 items-center mr-4 md:inline-block block ">
						<MdHome className="inline-block mx-1" />
						<a href="" className="text-primary hover:text-secondary transition">
							Home
						</a>
					</li>
					<li className="my-3 md:my-0 items-center mr-4 md:inline-block block">
						<MdTrendingUp className="inline-block mx-1" />
						<a href="" className="text-primary hover:text-secondary transition">
							Trending
						</a>
					</li>
					<li className="my-3 md:my-0 items-center mr-4 md:inline-block block">
						<MdVerified className="inline-block mx-1" />
						<a href="" className="text-primary hover:text-secondary transition">
							Verified
						</a>
					</li>
					<li className="my-3 md:my-0 items-center mr-4 md:inline-block block">
						<MdCollectionsBookmark className="inline-block mx-1" />
						<a href="" className="text-primary hover:text-secondary transition">
							Collections
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
