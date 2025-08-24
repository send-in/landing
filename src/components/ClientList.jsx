const logos = [
    "/brands/accenture.svg",
	"/brands/adobe.svg",
	"/brands/air-india.svg",
	"/brands/amazon.svg",
	"/brands/arista.svg",
	"/brands/deutschebank.svg",
	"/brands/expedia.svg",
	"/brands/fast-retailing.svg",
	"/brands/goldmansachs.svg",
	"/brands/google.svg",
	"/brands/ibm.svg",
	"/brands/icici.svg",
	"/brands/jio.svg",
	"/brands/jpmorgan.svg",
	"/brands/mathworks.svg",
	"/brands/oravle.svg",
	"/brands/qualcomm.svg",
	"/brands/urban-company.svg",
	"/brands/walmart.svg",
	"/brands/zomato.svg",
]

const ClientList = () => {
	return (
		<section
			className="
				relative z-10 text-white text-lg w-full gap-5 font-medium
				flex flex-col items-center overflow-hidden my-32
			"
		>
			<p>20+ Global teams saving hundreds of hours!</p>

			<div 
				className="
					absolute left-0 top-0 
					h-full w-32 bg-gradient-to-r z-10
					from-blue-100 to-transparent
				" 
			/>

			<div 
				className="
					absolute right-0 top-0 
					h-full w-32 bg-gradient-to-l  z-10
					from-blue-100 to-transparent
				" 
			/>

			<div 
				className="relative w-full flex animate-scroll gap-12 "
			>
				{[...logos, ...logos].map((logo, idx) => (
					<img
						className="h-[40px] object-contain z-0"
						alt="company logo"
						key={idx}
						src={logo}
					/>
				))}

			</div>
		</section>
	);
};
export default ClientList
