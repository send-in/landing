// #region Imports
import { useState } from "react"
import PlanCard from "../components/PlanCard"
// #endregion

const Pricing = () => {
	const [billing, setBilling] = useState("monthly")

	return (
		<section 
			className="
				font-mada py-16 px-4 flex flex-col 
				items-center gap-12 bg-bluewash
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
				className="flex items-center gap-4 bg-white p-1 rounded-full shadow-sm"
			>
				<button
					onClick={() => setBilling("monthly")}
					className={`px-6 py-1 rounded-full text-xl font-normal transition ${
						billing === "monthly"
							? "bg-blue-100 text-white"
							: "text-grey-300"
					}`}
				>
					Monthly
				</button>

				<button
					onClick={() => setBilling("yearly")}
					className={`px-6 py-1 rounded-full text-xl font-normal transition ${
						billing === "yearly"
							? "bg-blue-100 text-white"
							: "text-grey-300"
					}`}
				>
					Yearly
				</button>
			</aside>


			<aside 
				className="flex gap-10 w-full max-w-6xl"
			>
				<PlanCard
					title="Free plan"
					description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					price="$0"
					messages="20"
					buttonText="Get Started Today"
					features={[
						"Chrome extension",
						"Inbox dashboard",
						"Timezone intelligence",
						"1 Custom template",
						"Bulk scheduling from connection",
					]}
					buttonColor="bg-charcoal-200"
					textColor="text-charcoal-100"
				/>

				<PlanCard
					title="Pro Plan"
					description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					price="$25"
					messages="200"
					buttonText="Get Started Today"
					features={[
						"Chrome extension",
						"Inbox dashboard",
						"Timezone intelligence",
						"5 Custom templates",
						"Bulk scheduling from connection",
					]}
					buttonColor="bg-blue-100"
					textColor="text-blue-100"
				/>

				<PlanCard
					title="Enterprise Plan"
					description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					messages="∞"
					buttonText="Connect with us"
					features={[
						"Chrome extension",
						"Inbox dashboard",
						"Timezone intelligence",
						"∞ Custom templates",
						"Bulk scheduling from connection",
					]}
					highlighted={true}
					buttonColor="bg-purple-200"
					textColor="text-purple-200"
				/>
			</aside>
		</section>
	)
}

export default Pricing