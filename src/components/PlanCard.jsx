const PlanCard = ({
	title,
	description,
	price,
	messages,
	buttonText,
	features,
	highlighted = false,
	buttonColor = "bg-charcoal-200",
	textColor = "text-charcoal-100",
	slider = false,
	action = () => {}
}) => {
	return (
		<div
			className={`
				bg-white rounded-3xl shadow p-8 flex flex-col items-center text-center transition
				${highlighted ? "border-8 border-purple-200" : ""}
				font-normal tracking-tighter h-fit
			`}
		>

		<h3 
			className={`
				text-3xl font-medium text-charcoal-100
				${textColor}
			`}>
			{title}
		</h3>

		<p 
			className="text-grey-300 mt-3 text-lg">
			{description}
		</p>

		<div className="w-full border-t border-grey-100 my-6" />

			{
				price &&
				<p
					className={`text-6xl font-semibold  w-[40%] my-5 ${
						textColor
					}`}
				>
					{price}{" "}
					<span className="text-3xl font-normal"> 
						/month
					</span>
				</p>
			}

			{
				messages && 
				<p 
					className="text-lg text-grey-200"
				>
					<span className="text-charcoal-100">
						{messages}{" "}
					</span >
					scheduled messages / month
				</p>
			}

			<button
				className={`
					mt-2 mb-5 w-[90%] ${buttonColor} text-white py-1 
					rounded-full font-medium text-lg hover:brightness-90 
					transition-all ease-in-out delay-100 
					cursor-pointer
				`}
				onClick={action}
			>
				{buttonText}
			</button>

			<div className="w-full border-t border-grey-100 my-6" />

			<ul className="space-y-3 text-grey-300 text-left w-full text-lg">
				{features.map((f, i) => (
					<li key={i}>
						<img 
							src="check.svg" 
							alt="Check icon" 
							className="inline-block mr-2" 
						/>
						{f}
					</li>
				))}
			</ul>
		</div>
	)
}

export default PlanCard