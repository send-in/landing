// #region Imports
// import { useState } from "react"
// #endregion


const OnboardingCluster = ({
	nooffer=false
}) => {

	// const [email, setEmail] = useState("")

	return (
		<aside
			className="
				flex flex-col items-center z-10
				text-sm rounded-2xl text-charcoal-100
				xlarge:text-xl
			"
		>

			<div
				className="
					flex justify-center items-center gap-2 w-full
					small:w-[80%]
				"
			>
				<div
					className="
						bg-white p-1 rounded-full w-full 
						min-w-fit flex justify-between
					"
				>
					<input
						className="
							px-5 w-[65%] rounded-full
							focus:outline-none focus:ring-0
						"
						placeholder="Enter your email"
					/>
					<a
						href="/"
						className="
							px-5 py-1 rounded-full w-[35%] small:w-fit small:px-3
							text-white hover:bg-blue-200 bg-blue-100
							transition-all ease-in-out delay-100 
							cursor-pointer whitespace-nowrap
						"
					>
						Get started
					</a>
				</div>

				<a
					href="/"
					className="
					  bg-white rounded-full p-2 h-full flex-shrink-0
						opacity-90 hover:opacity-100
						transition-all ease-in-out delay-100 
						cursor-pointer
					"
				>
					<img
						className="h-full"
						src="/icons/store.svg"
						alt="chrome-web-store"
					/>
				</a>
			</div>


			{
				!nooffer &&
				<div className="flex gap-2 items-center text-white text-md whitespace-nowrap justify-center">
					<p>7-day free trial</p>
					<img
						className="h-[60%]"
						src="/icons/globe.svg"
						alt="globe"
					/>
					<p>Chrome extension</p>
					<img
						className="h-[60%]"
						src="/icons/globe.svg"
						alt="globe"
					/>
					<p>5 minute setup</p>
				</div>
			}

		</aside>
	)
}

export default OnboardingCluster
