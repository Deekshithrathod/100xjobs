import { poppins } from "@/lib/fonts";

const Header = () => {
	return (
		<nav className="bg-transparent">
			<h1 className={`text-2xl font-light ${poppins.className} bg-transparent`}>
				<span className="font-bold">GitHub </span>Jobs
			</h1>
		</nav>
	);
};
export default Header;
