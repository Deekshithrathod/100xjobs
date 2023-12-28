const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="p-3 sm:px-28 sm:py-8 w-full max-w-screen-xl mx-auto">
			{children}
		</div>
	);
};
export default MaxWidthWrapper;
