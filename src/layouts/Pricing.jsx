// #region Imports
import { useState } from "react"
import PlanCard from "../components/PlanCard"
// #endregion

const planData = [
    {
		title: "Free plan",
		description: "It is a long established fact that a reader will be distracted by the readable content o",
		price: "0",
		messages: "20",
		buttonText: "Get Started Today",
		features: [
			"Chrome extension",
			"Inbox dashboard",
			"Timezone intelligence",
			"1 Custom template",
			"Bulk scheduling from connection"
		],
		buttonColor: "bg-charcoal-200",
		textColor: "text-charcoal-100",
		highlighted: false,
		slider: false,
		billing: "billing"
    },
    {
		title: "Pro Plan",
		description: "It is a long established fact that a reader will be distracted by the readable content o",
		price: "25",
		messages: "200",
		buttonText: "Get Started Today",
		features: [
			"Chrome extension",
			"Inbox dashboard",
			"Timezone intelligence",
			"5 Custom templates",
			"Bulk scheduling from connection"
		],
		buttonColor: "bg-blue-100",
		textColor: "text-blue-100",
		slider: true,
		highlighted: false,
		billing: "billing"
    },
    {
		title: "Enterprise Plan",
		description: "It is a long established fact that a reader will be distracted by the readable content o",
		messages: "∞",
		buttonText: "Connect with us",
		features: [
			"Chrome extension",
			"Inbox dashboard",
			"Timezone intelligence",
			"∞ Custom templates",
			"Bulk scheduling from connection"
		],
		highlighted: true,
		slider: false,
		buttonColor: "bg-purple-200",
		textColor: "text-purple-200",
		billing: "billing"
    }
]


const Pricing = () => {
	const [billing, setBilling] = useState("MONTHLY")

	return (
		<section 
			className="
				font-mada py-16 px-4 flex flex-col 
				items-center gap-8 mt-20
			"
		>
			<h3 
				className="
					text-5xl font-normal 
					tracking-tighter
				"
			>
				Pricing
			</h3>

			<aside 
				className="flex items-center  bg-white p-1 rounded-full border border-grey-100"
			>
				<button
					onClick={() => setBilling("MONTHLY")}
					className={`px-4 rounded-full text-md font-normal transition ${
						billing === "MONTHLY"
							? "bg-blue-100 text-white"
							: "text-grey-300"
					}`}
				>
					Monthly
				</button>

				<button
					onClick={() => setBilling("YEARLY")}
					className={`px-4 rounded-full text-md font-normal transition ${
						billing === "YEARLY"
							? "bg-blue-100 text-white"
							: "text-grey-300"
					}`}
				>
					Yearly
				</button>
			</aside>


			<aside 
				className="flex gap-10 w-full max-w-[70%]"
			>
				{
					planData.map(({
						title,
						description,
						price,
						messages,
						buttonText,
						features,
						buttonColor,
						textColor,
						highlighted,
						slider
					}, index) => (
						<PlanCard
							key={index}
							title={title}
							description={description}
							price={price}
							messages={messages}
							buttonText={buttonText}
							features={features}
							buttonColor={buttonColor}
							textColor={textColor}
							highlighted={highlighted}
							slider={slider}
							billing={billing}
						/>
					))
				}
			</aside>
		</section>
	)
}

export default Pricing