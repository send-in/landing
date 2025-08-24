// #region Imports
import { useState } from "react"
// #endregion

const faqData = [
	{
		question: "Who is this tool for?",
		answer:
			"Perfect for recruiters, founders, sales teams, marketers, and freelancers who rely on LinkedIn for growth and wish to schedule their outreach for maximum efficiency.",
	},
	{
		question: "What is a LinkedIn message scheduler?",
		answer:
			"A tool that lets you schedule and automate sending LinkedIn messages to your prospects, connections, or leads at a chosen time.",
	},
	{
		question: "Is this safe for my LinkedIn account?",
		answer:
			"Yes. The tool uses safe automation practices and is designed to comply with LinkedIn’s fair usage policies.",
	},
	{
		question: "Can I automate LinkedIn follow-ups?",
		answer:
			"Yes, you can set up automated sequences that send follow-up messages based on conditions and timing you choose.",
	},
	{
		question: "How many LinkedIn messages can I schedule per day?",
		answer:
			"Depending on your LinkedIn account type, you can schedule anywhere between 20–100+ messages per day while staying within safe limits.",
	},
]

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(0)

	const toggleFAQ = (index) => 
		setOpenIndex(openIndex === index ? 0 : index)

	return (
		<section 
			className="
				font-mada py-10 px-4 mb-10 z-20
				flex flex-col items-center gap-10 w-full
			"
		>
			<h3 
				className="
					text-5xl font-normal 
					tracking-tighter
				"
			>
				FAQ
			</h3>

			<div 
				className="flex flex-col items-center gap-5 w-[50%] h-[35vh] tracking-tight text-charcoal-100"
			>
				{faqData.map((
					faq, 
					index
				) => (
					<div
						className="bg-white rounded-xl border border-grey-100 p-4 cursor-pointer transition-transform ease-in-out delay-100 w-full"
						onClick={() => toggleFAQ(index)}
						key={index}
					>
						<div className="flex justify-between items-center">
							<h3 
								className="text-xl font-normal"
							>
								{faq.question}
							</h3>
							<img
								src="/icons/arrow.svg"
								alt="toggle arrow"
								className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
									openIndex === index ? "rotate-180" : "rotate-0"
								}`}
							/>
						</div>

						<div
							className={`overflow-hidden transition-all duration-500 ease-in-out ${
								openIndex === index ? "max-h-40 opacity-100 mt-10" : "max-h-0 opacity-0"
							}`}
						>
							<p 
								className="text-md text-charcoal-100"
							>
								{faq.answer}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
  	)
}

export default FAQ
