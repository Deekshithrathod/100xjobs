"use client";

import { poppins } from "@/lib/fonts";
import { Globe2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const defaultLocations = [
	{
		id: 1,
		name: "London",
	},
	{
		id: 2,
		name: "New York",
	},
	{
		id: 3,
		name: "Berlin",
	},
	{
		id: 4,
		name: "Delhi",
	},
];

const LocationSearch = () => {
	// const [selectId, setSelectId] = useState(null)
	const [query, setQuery] = useState("");

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	useEffect(() => {
		changeURL();
	}, [query]);
	const changeURL = () => {
		const baseURL = pathname;
		const params = new URLSearchParams(searchParams);
		if (query) {
			params.set("loc", query);
		} else {
			params.delete("loc");
		}
		// params.set("loc", query);
		replace(`${baseURL}?${params.toString()}`);
	};

	const handleSearch = (query: string) => {
		// console.log(`loc: ${query}`);
		const params = new URLSearchParams(searchParams);
		if (query) {
			params.set("loc", query);
		} else {
			params.delete("loc");
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<>
			<h2
				className={`text-slate-300 text-sm font-bold uppercase ${poppins.className} mt-8`}>
				Location
			</h2>
			<div className="bg-white rounded shadow flex items-center mt-4">
				<label htmlFor="location">
					<Globe2 className="my-4 mx-3 w-4 h-4 relative flex-col justify-start items-start inline-flex text-slate-400" />
				</label>

				<input
					id="location"
					className={`placeholder:text-slate-300 text-slate-500 text-xs font-normal w-full h-10 outline-none`}
					placeholder="City, state, zip code or country"
					autoComplete="off"
					onChange={(e) => handleSearch(e.target.value)}
					defaultValue={searchParams.get("query")?.toString()}
				/>
			</div>
			<div className="mt-7 px-4 flex flex-col">
				{defaultLocations.map((location) => (
					<RadioButton
						key={location.id}
						location={location.name}
						setQuery={setQuery}
					/>
				))}
			</div>
		</>
	);
};

const RadioButton = ({
	location,
	setQuery,
}: {
	location: string;
	setQuery: Function;
}) => {
	return (
		<div className="inline-flex items-center">
			<label
				className="relative flex items-center p-3 rounded-full cursor-pointer"
				htmlFor={location}>
				<input
					name="type"
					type="radio"
					className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-500 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
					id={location}
					onChange={() => {
						setQuery(location);
						console.log(location);
					}}
				/>
				<span className="absolute text-blue-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3 w-3"
						viewBox="0 0 16 16"
						fill="currentColor">
						<circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
					</svg>
				</span>
			</label>
			<label
				className={`mt-px text-indigo-900 text-sm font-medium cursor-pointer select-none ${poppins.className} capitalize`}
				htmlFor={location}>
				{location}
			</label>
		</div>
	);
};

export default LocationSearch;
