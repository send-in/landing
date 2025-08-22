import { useState } from "react"

const faqData = [
  {
    "question": "Who is this tool for?",
    "answer": "Perfect for recruiters, founders, sales teams, marketers, and freelancers who rely on LinkedIn for growth and wish to schedule their outreach for maximum efficiency."
  },
  {
    "question": "What is a LinkedIn message scheduler?",
    "answer": "A tool that lets you schedule and automate sending LinkedIn messages to your prospects, connections, or leads at a chosen time."
  },
  {
    "question": "Is this safe for my LinkedIn account?",
    "answer": "Yes. The tool uses safe automation practices and is designed to comply with LinkedIn’s fair usage policies."
  },
  {
    "question": "Can I automate LinkedIn follow-ups?",
    "answer": "Yes, you can set up automated sequences that send follow-up messages based on conditions and timing you choose."
  },
  {
    "question": "How many LinkedIn messages can I schedule per day?",
    "answer": "Depending on your LinkedIn account type, you can schedule anywhere between 20–100+ messages per day while staying within safe limits."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="font-mada bg-[#F7FAFF] py-10 px-4 text-charcoal-200 z-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base font-medium">{faq.question}</h3>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
