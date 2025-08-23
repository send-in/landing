// #region Imports
import OnboardingCluster from "../components/OnboardingCluster"
// #endregion


const Features = () => {
	
	return (
		<section
			className="
				flex flex-col items-center z-10
				text-center p-4 gap-24 relative
				bg-white w-screen text-white
			"
		>
			<div
				className="
					w-full h-full flex flex-col justify-center 
					items-center gap-10 rounded-3xl p-20 relative
					bg-purple-200 bg-cover overflow-hidden
				"
			>

				<h3 
					className="
						text-5xl font-normal 
						tracking-tighter
					"
				>
					Bulk Schedule DMs
				</h3>

				<div
					className="flex w-[80%] text-xl tracking-tight font-normal gap-4 h-[53vh] "
				>
					<aside
						className="
							bg-white bg-opacity-35 w-[50%] h-full rounded-2xl p-8 pt-10
							flex flex-col justify-start items-center gap-5
						"
					>
						<h3> Bulk scheduling </h3>

						<div className="relative">
							<img 
								src="/schedule.svg"
								alt="schedule"
								className="w-[80%]"
							/>
							<img 
								src="/options.svg"
								alt="options"
								className="absolute -bottom-10 right-0 shadow-md animate-float"
							/>
							<img 
								src="/logo.svg"
								alt="logo"
								className="absolute top-5 right-5 w-[20%] animate-wiggle"
							/>
						</div>
					</aside>

					<div className="flex flex-col w-[50%] gap-4 h-full">
						<aside
							className="
								bg-white bg-opacity-35 h-[70%] rounded-2xl p-8 pt-10  
								flex flex-col justify-start items-center gap-2
							"
						>
							<h3> Timezone intelligence </h3>
							<div className="relative">
								<img 
									src="/timezone.svg"
									alt="timezone"
									className="w-[70%]"
								/>
								<img 
									src="/switch.svg"
									alt="switch"
									className="absolute bottom-0 right-5 w-[50%]"
								/>
							</div>
						</aside>

						<aside
							className="
								bg-white bg-opacity-35 h-[30%] rounded-2xl p-2
								flex flex-col justify-center items-center gap-2
							"
						>
							<h3> Never miss a lead, starting now ! </h3>

							<OnboardingCluster nooffer/>
						</aside>
					</div>

				</div>

				<div
					className="
						bg-noise absolute inset-0 w-full h-full -z-10 opacity-25 
						[mask-image:linear-gradient(to_bottom,transparent,black)] 
						[mask-repeat:no-repeat] [mask-size:100%_100%]
					"
				/>
			</div>
		</section>
	)
}

export default Features