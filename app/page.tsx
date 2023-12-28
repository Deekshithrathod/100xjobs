import MaxWidthWrapper from "@/components/max-width-wrapper";
import SearchBox from "@/components/search-box";
import { poppins } from "@/lib/fonts";
import { Briefcase, Workflow } from "lucide-react";
import Image from "next/image";

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
		</div>
	);
}
