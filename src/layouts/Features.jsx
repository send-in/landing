// #region Imports
import OnboardingCluster from "../components/CTACluster"
import ClientList from '../components/ClientList';
// #endregion


const Features = () => {
	
	return (
		<section
			className="
				flex flex-col items-center z-10
				text-center p-4 gap-24 relative
				bg-white w-screen text-charcoal-100
			"
		>
			<div
				className="
					w-full h-full flex flex-col justify-center 
					items-center gap-5 rounded-3xl py-20 relative
					bg-blue-100 bg-cover overflow-hidden
				"
			>

				<h3 
					className="
						text-4xl font-normal w-[40%]
						tracking-tighter text-white
						leading-8
					"
				>
					Approve and launch experiments within hours, not weeks.
				</h3>

				<p 
					className="
						font-normal tracking-tight leading-5
						text-md text-white w-[30%] mb-10
					"
				>
					Schedule LinkedIn messages across time zones so you never 
					have to wake up at odd hours and miss a lead again.
				</p>



				<div 
					className="
						bg-bluewash flex justify-center 
						rounded-2xl w-[65%] overflow-hidden
						h-[60vh] relative
					">
					<img 
						src="others/options.svg"
						alt="options"
						className="w-[90%] absolute -bottom-14"
					/>
				</div>


				<ClientList/>


				<div
					className="flex w-[65%] text-2xl tracking-tighter gap-4 h-fit text-charcoal-100 z-10"
				>
					<aside
						className="
							bg-bluewash w-[50%] rounded-2xl p-8 pt-10
							flex flex-col justify-start items-center gap-2
						"
					>
						<h3
							className="w-[80%] leading-6"
						> 
							Approve and launch experiments within hours, not weeks.
						</h3>

						<p 
							className="
								font-normal tracking-tight
								text-sm text-grey-300 w-[80%]
								mb-10
							"
						>
							Schedule LinkedIn messages across time zones so you never have to wake 
							up at odd hours and miss a lead again.
						</p>

						<div className="relative">
							<img 
								src="others/schedule.svg"
								alt="schedule"
								className="w-[80%]"
							/>
							<img 
								src="others/options.svg"
								alt="options"
								className="absolute -bottom-14 right-0 animate-float"
							/>
							<img 
								src="icons/logo.svg"
								alt="logo"
								className="absolute top-5 right-5 w-[20%] animate-wiggle"
							/>
						</div>
					</aside>

					<div className="flex flex-col w-[50%] gap-4 h-full">
						<aside
							className="
								bg-bluewash h-[70%] rounded-2xl p-8 pt-10  
								flex flex-col justify-start items-center gap-2
							"
						>
							<h3
								className="w-[80%] leading-6"
							> 
								Approve and launch experiments within hours, not weeks.
							</h3>

							<p 
								className="
									font-normal tracking-tight
									text-sm text-grey-300 w-[80%]
									mb-10
								"
							>
								Schedule LinkedIn messages across time zones so you never have to wake 
								up at odd hours and miss a lead again.
							</p>							
							
							<div className="relative">
								<img 
									src="others/timezone.svg"
									alt="timezone"
									className="w-[70%]"
								/>
								<img 
									src="others/switch.svg"
									alt="switch"
									className="absolute bottom-0 right-5 w-[50%]"
								/>
							</div>
						</aside>

						<aside
							className="
								bg-bluewash h-[30%] rounded-2xl p-3
								flex flex-col justify-center items-center gap-2
							"
						>
							<h3> Never miss a lead, starting now ! </h3>

							<OnboardingCluster nooffer/>
						</aside>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Features