import { Montserrat, Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "500", "700"],
});

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["500", "700"],
});
