import { Clock, Globe } from "lucide-react";
import Image from "next/image";

const JobCard = () => {
	return (
		<div className=" bg-white rounded shadow p-3 flex gap-4 mt-6">
			<div>
				<Image
					width={96}
					height={96}
					src="/logo.png"
					alt="logo"
					className="rounded "
				/>
			</div>
			<div>
				<div className="text-indigo-900 text-xs font-bold font-roboto">
					Kasisto
				</div>
				<div className="text-indigo-900 text-base font-normal font-roboto mt-2">
					Front-End Software Engineer
				</div>
				<div className="text-indigo-900 text-xs font-bold font-roboto py-[0.36rem] px-2 rounded border border-indigo-900 w-fit mt-3">
					Full time
				</div>
				<div className="flex gap-7 mt-6">
					<div className="flex gap-1.5 items-center">
						<Globe className=" w-3.5 h-3.5 text-slate-400" />
						<div className="text-slate-300 text-xs font-medium font-roboto">
							New York
						</div>
					</div>
					<div className="flex gap-1.5 items-center">
						<Clock className="w-3.5 h-3.5 text-slate-400" />
						<div className="text-slate-300 text-sm font-medium font-roboto">
							5 days ago
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default JobCard;
