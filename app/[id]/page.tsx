import { Clock, Globe, MoveLeft } from "lucide-react";
import Image from "next/image";

const page = () => {
	return (
		<div>
			<div className="mt-8">
				<div className="text-blue-500 text-sm font-medium font-poppins flex items-center">
					<MoveLeft width={20} height={20} className="mr-3" />
					Back to search
				</div>
				<div className="mt-9 text-slate-300 text-sm font-bold font-poppins uppercase">
					How to Apply
				</div>
				<div className="mt-4 text-indigo-900 text-sm font-medium font-poppins">
					Please email a copy of your resume and online portfolio to
					<Email email="wes@kasisto.com" />
					& CC
					<Email email="eric@kasisto.com" />
				</div>
			</div>
			<div className="mt-9">
				<h1 className="text-indigo-900 text-2xl font-bold font-roboto">
					Front-End Software Engineer
				</h1>
				<div className=" w-fit rounded border border-indigo-900 text-indigo-900 text-xs font-bold font-roboto px-2 py-1">
					Full time
				</div>
				<div className="text-slate-300 text-xs font-bold font-roboto mt-3 flex gap-1">
					<Clock className="w-4 h-4 text-slate-300" /> 10 hours ago
				</div>
			</div>
			<div className="flex gap-3 mt-10">
				<div>
					<Image src="/logo.png" alt="logo" width={50} height={50} />
				</div>
				<div className="flex flex-col justify-between">
					<div className="text-indigo-900 text-lg font-bold font-roboto ">
						Kasisto
					</div>
					<div className="text-slate-300 text-xs font-bold font-roboto flex gap-1 items-center">
						<Globe className="w-4 h-4 text-slate-300" /> 10 hours ago
					</div>
				</div>
			</div>
			<div className=" text-indigo-900 text-base font-normal font-roboto leading-normal mt-10">
				Humanizing Digital Experiences®
				<br />
				<br />
				Kasisto's Digital Experience Platform, KAI, is designed for financial
				institutions to deliver the industry's most amazing Conversational AI
				powered intelligent virtual assistants to their customers. KAI is open
				and extensible, and also fluent in the language of banking and finance.
				From simple retail transactions to the complex demands of corporate
				banks and wealth management, financial institutions can deliver
				meaningful digital interactions with KAI that help build their digital
				brand.
				<br />
				<br />
				Financial institutions around the world use KAI, including DBS Bank,
				J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank
				among others. They chose KAI for its proven track record to drive
				business results while improving customer experiences. The platform is
				used by millions of consumers around the world, all the time, across
				multiple channels, in different languages, and is optimized for
				performance, scalability, security, and compliance.
				<br />
				<br />
				This position
				<br />
				<br />
				We are looking for a Full-Stack, client side software engineer to help
				build and integrate responsive chat interfaces, analytics dashboards and
				reporting tools.
				<br />
				<br />
				What you'll be doing
				<br />
				<br />
				Working closely with clients and internal engineering, product and
				design teams to gather requirements Building and integrating front-end
				applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack,
				Handlebars.js, LESS, Backbone, Python, Django and Java Working to
				improve user experience and functionality for tools Writing testable
				code utilizing common front-end unit and BDD testing frameworks What you
				need for this position
				<br />
				<br />
				3+ years in client-side web development with CSS, HTML, Javascript and
				jQuery Proven, full-stack front-end experience using Python and Django
				Other Modern Web Framework(s) experience is a plus (React, Vue, Angular,
				Ember) Experience working collaboratively to build scalable, modular,
				production software in an Agile environment Experience using RESTful
				json services Node.js and API development familiarity is plus D3.js is a
				plus
				<br />
				<br />
				What we offer:
				<br />
				<br />
				Competitive compensation package Ground floor opportunity within rapidly
				growing tech startup Great collaborative team environment Full Benefits
				Fun perks
				<br />
				<br />
				Location - NYC, Flatiron District
				<br />
				<br />
				We welcome your cover letter with a description of your previous
				complete experience and your resume. Applicants must be authorized to
				work in the US as we are unable to sponsor. Kasisto is an equal
				opportunity employer.
			</div>
		</div>
	);
};

export default page;

const Email = ({ email }: { email: string }) => {
	return (
		<span className="text-blue-500 text-sm font-medium font-poppins">
			{` ` + email + ` `}
		</span>
	);
};
