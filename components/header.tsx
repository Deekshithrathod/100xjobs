import { poppins } from "@/lib/fonts";

const Header = () => {
	return (
		<nav>
			<h1 className={`text-2xl leading-normal font-light ${poppins.className}`}>
				<span className="font-bold">100x</span> Jobs
			</h1>
		</nav>
	);
};
export default Header;
