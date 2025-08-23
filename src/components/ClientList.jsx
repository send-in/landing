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
		<aside 
			className="
				z-10 text-white text-md w-[50%] gap-2 font-medium
				flex flex-col items-center overflow-clip my-10 mt-20
			"
		>
			<p>20+ Global teams saving hundreds of hours !</p>

			<div 
				className="relative w-full flex animate-scroll gap-12"
			>
				{[
					...logos, 
					...logos
				].map((
					logo, 
					idx
				) => (
					<img
						className="w-[600px] object-contain"
						alt="company logo"
						key={idx}
						src={logo}
					/>
				))}
			</div>
		</aside>
	)
}

export default ClientList
