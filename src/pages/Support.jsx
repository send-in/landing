// #region Imports
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
// #endregion

const Support = () => {

	return (
		<main 
			className="
				bg-white min-h-screen 
				flex flex-col items-center pt-14
			"
		>
			<aside 
				className="
					mx-auto max-w-3xl px-6
					text-gray-800 flex-1 w-full
				"
			>

				<Navbar 
					bg="bg-bluewash"
				/>

				<header 
					className="
						mt-24 small:mt-12 mb-10 text-center 
						flex justify-center pb-8
					"
				>
					<h1 
						className="
							text-3xl font-normal 
							tracking-tight w-[80%] small:w-full
						"
					>
						Need help? We’re here to answer your questions.  
						Contact us below.
					</h1>
				</header>

				<section 
					className="bg-bluewash rounded-2xl p-8 small:p-6"
				>
					<form 
						className="space-y-6"
					>
						<aside>
							<label 
								htmlFor="name" 
								className="block text-sm font-medium"
							>
								Full Name
							</label>

							<input
								type="text"
								id="name"
								placeholder="Your name"
								className="
									mt-2 block w-full rounded-xl
									bg-white px-4 py-2 focus:ring-2 
									focus:ring-blue-500 focus:outline-none
								"
							/>
						</aside>

						<aside>
							<label 
								htmlFor="email" 
								className="block text-sm font-medium"
							>
								Email Address
							</label>
							<input
								type="email"
								id="email"
								placeholder="you@example.com"
								className="
									mt-2 block w-full rounded-xl 
									bg-white px-4 py-2 focus:ring-2 
									focus:ring-blue-500 focus:outline-none
								"
							/>
						</aside>

						<aside>
							<label 
								htmlFor="message" 
								className="block text-sm font-medium"
							>
								Message
							</label>
							<textarea
								id="message"
								rows="4"
								placeholder="How can we help you?"
								className="
									mt-2 block w-full rounded-xl bg-white 
									px-4 py-2 focus:ring-2 focus:ring-blue-500 
									focus:outline-none
								"
							></textarea>
						</aside>

						<button
							type="submit"
							className="
								bg-blue-100 rounded-xl bg-blue-600 
								py-3 px-10 font-medium text-white 
								hover:bg-blue-700 transition
							"
						>
							Submit
						</button>
					</form>
				</section>

				<section 
					className="mt-12 small:mb-12"
				>
					<aside 
						className="rounded-2xl bg-white p-6 small:p-2"
					>
						<h2 
							className="text-lg font-semibold"
						>
							Email Support
						</h2>

						<p 
							className="mt-2 text-gray-600"
						>
							Reach out to us at{" "}
							<a 
								href="mailto:support@yourdomain.com" 
								className="text-blue-600 underline"
							>
								support@yourdomain.com
							</a> 
							and we’ll respond within 24 hours.
						</p>
					</aside>
				</section>
			</aside>

			<Footer fixed={false} />
		</main>
	)
}

export default Support
