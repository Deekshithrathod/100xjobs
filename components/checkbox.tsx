"use client";

import { poppins } from "@/lib/fonts";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Checkbox = () => {
	const [fulltime, setFulltime] = useState(false);
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		changeURL();
	}, [fulltime]);

	const changeURL = () => {
		const baseURL = pathname;
		const params = new URLSearchParams(searchParams);
		if (fulltime) {
			params.set("fulltime", "true");
		} else {
			params.set("fulltime", "false");
		}
		router.replace(`${baseURL}?${params.toString()}`);
	};

	return (
		<div className="mt-8 px-4 flex items-center gap-2">
			<input
				type="checkbox"
				name="fulltime"
				id="fulltime"
				onChange={() => {
					console.log(`fulltime: ${fulltime}`);
					setFulltime(!fulltime);
				}}
				checked={fulltime}
				className="appearance-none w-4 h-4 rounded-sm border border-slate-300 sm:w-5 sm:h-5 checked:bg-blue-500 checked:rounded-sm"
			/>

			<label
				htmlFor="fulltime"
				className={`${poppins.className} text-indigo-900 text-sm font-medium sm:text-base`}>
				Full time
			</label>
		</div>
	);
};
export default Checkbox;
