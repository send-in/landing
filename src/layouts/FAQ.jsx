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
	const [openIndex, setOpenIndex] = useState(null)

	const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index)

	return (
		<section 
			className="
				font-mada py-10 px-4 text-charcoal-200 z-20
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
				className="flex flex-col items-center gap-5 w-[50%] h-[35vh] "
			>
				{faqData.map((
					faq, 
					index
				) => (
					<div
						className="bg-white rounded-lg shadow-sm p-4 cursor-pointer transition-transform ease-in-out delay-100 w-full"
						key={index}
						onClick={() => toggleFAQ(index)}
					>
						<h3 className="text-xl font-normal">{faq.question}</h3>

						<div
							className={`overflow-hidden transition-all duration-500 ease-in-out ${
								openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
							}`}
						>
							<p className="text-lg text-charcoal-100">
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
