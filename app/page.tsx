import Checkbox from "@/components/checkbox";
import JobCard from "@/components/job-card";
import LocationSearch from "@/components/loc-search";
import SearchBox from "@/components/search-box";

export default function Home() {
	const imageLoader = ({
		src,
		width,
		quality,
	}: {
		src: string;
		width: number;
		quality?: number;
	}) => {
		return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
	};
	return (
		<div>
			<SearchBox />
			<Checkbox />
			<LocationSearch />
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
		</div>
	);
}
