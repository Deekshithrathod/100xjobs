import { Briefcase } from "lucide-react";
import Image from "next/image";

const SearchBox = () => {
	return (
		<div className="mt-8 w-full bg-blue-50 h-36 rounded-lg relative">
			{/* This is the background image */}
			<Image
				src="/backgroundImg.png"
				alt="logo"
				className="rounded-lg"
				fill
				priority
			/>

			<div className="flex justify-between align-middle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 rounded-md bg-white p-1">
				<div className="flex w-full text-xs">
					<label
						htmlFor="query"
						className="text-[#B9BDCF] self-center pl-3 pr-2 cursor-pointer">
						<Briefcase width={18} />
					</label>

					<input
						type="text"
						name="query"
						id="query"
						placeholder="Title, companies, expertise, location"
						className="text-slate-400 placeholder:text-slate-300 leading-normal text-xs font-normal text-ellipsis w-full outline-none "
						autoComplete="off"
					/>
				</div>
				<button className="bg-blue-500 text-white text-base font-medium px-7 py-3 rounded">
					Search
				</button>
			</div>
		</div>
	);
};
export default SearchBox;
