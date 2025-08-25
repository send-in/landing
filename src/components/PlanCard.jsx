// #region Imports
import { useState } from "react"
// #endregion

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
	action = () => {},
    billing = "MONTHLY",
}) => {
	const [sliderValue, setSliderValue] = useState(messages)
	const pricePerMessage = price / messages
	const calculatedPrice = (sliderValue * pricePerMessage).toFixed(0)

	return (
		<div
			className={`
				bg-white rounded-3xl py-8 p-4 flex flex-col items-center text-center transition
				${highlighted ? "border-4 border-purple-200" : "border border-grey-100"}
				font-normal tracking-tighter xlarge:p-6 xlarge:py-12 
				${highlighted ? "h-fit" : "justify-between" }
			`}
		>

		<h3 
			className={`
				text-2xl font-medium ${textColor}
				xlarge:text-4xl
			`}
		>
			{title}
		</h3>

		<p 
			className="
				text-grey-200 mt-3 text-sm tracking-tight 
				xlarge:text-lg xlarge:leading-6
			"
		>
			{description}
		</p>

		<div className="w-full border-t border-grey-100 my-4 xlarge:my-8" />

			{
				price &&
				<div
					className={`text-5xl xlarge:text-6xl font-semibold  w-[30%] my-2 flex flex-col items-center ${
						textColor
					}`}
				>
					<p>
						${ 
							billing === "MONTHLY" ? 
							calculatedPrice : ((calculatedPrice * 12)/1.5) 
						}{" "}
					</p>
					
					<span className="text-xl font-normal xlarge:text-2xl"> 
						/month
					</span>
				</div>
			}

			{
				messages && 
				<p 
					className="text-md text-grey-200 xlarge:text-lg"
				>
					<span className="text-charcoal-100">
						{sliderValue}{" "}
					</span >
					scheduled messages / month
				</p>
			}

			{
				slider && (
				<input
					type="range"
					min={100}
					max={2000}
					step={100}
					value={sliderValue}
					onChange={(e) => setSliderValue(Number(e.target.value))}
					className="w-[90%] my-4 accent-blue-100 cursor-pointer "
				/>
			)}

			<button
				className={`
					my-2 w-[90%] ${buttonColor} text-white py-1 
					rounded-full font-medium text-lg hover:brightness-90 
					transition-all ease-in-out delay-100 
					cursor-pointer xlarge:my-6
				`}
				onClick={action}
			>
				{buttonText}
			</button>

			<div className="w-full border-t border-grey-100 my-6 xlarge:my-8" />

			<ul className="space-y-3 text-grey-200 text-left w-full text-md xlarge:text-lg">
				{features.map((f, i) => (
					<li key={i}>
						<img 
							className="inline-block mr-2" 
							src="/icons/check.svg" 
							alt="Check icon" 
						/>
						{f}
					</li>
				))}
			</ul>
		</div>
	)
}

export default PlanCard