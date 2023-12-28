import { Briefcase } from "lucide-react";
import Image from "next/image";

const SearchBox = () => {
	return (
		<div className="mt-8">
			<div className="w-full bg-red-200  h-36 rounded-lg relative">
				<Image
					src="/backgroundimg.png"
					alt="logo"
					className="rounded-lg"
					fill
					objectFit="cover"
				/>
				<div className="flex justify-between align-middle rounded-md bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5  p-1">
					<div className="flex w-full pr-6 text-xs">
						<label htmlFor="query" className="flex p-3 pr-2">
							<Briefcase className="text-[#B9BDCF] h-4 self-center" />
						</label>

						<input
							type="text"
							name="query"
							id="query"
							placeholder="Title, companies, expertise, location"
							className="text-slate-300 text-xs font-normal w-full text-ellipsis"
						/>
					</div>

					<button className=" w-1/6 min-w-24 h-12 bg-blue-500 rounded text-white text-base font-medium ">
						Search
					</button>
				</div>
			</div>
		</div>
	);
};
export default SearchBox;
