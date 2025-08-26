// #region Imports
import OnboardingCluster from "../components/CTACluster"
import ClientList from "../components/ClientList"
import FeatureCard from "../components/FeatureCard"
// #endregion


const Features = () => (
	<section
		className="
			flex flex-col items-center z-10
			text-center p-4 xlarge:p-8 xlarge:pt-4 pt-0 gap-24 relative
			bg-white w-screen text-charcoal-100
		"
	>
		<div
			className="
				w-full h-full flex flex-col justify-center 
				items-center gap-5 rounded-3xl py-20 small:py-8 relative
				bg-blue-100 bg-cover overflow-hidden xlarge:pb-32
			"
		>

			<h3 
				className="
					text-4xl font-normal w-[35%]
					small:w-full xlarge:text-6xl
					xlarge:w-[30%] tracking-tighter 
					text-white leading-8 mt-10
					small:mt-2
				"
			>
				Approve and launch experiments within hours, not weeks.
			</h3>

			<p 
				className="
					font-normal tracking-tight leading-5
					text-md xlarge:text-xl text-white w-[30%] mb-10
					small:w-[80%] xlarge:w-[20%]
				"
			>
				Schedule LinkedIn messages across time zones so you never 
				have to wake up at odd hours and miss a lead again.
			</p>



			<div 
				className="
					bg-bluewash flex justify-center 
					rounded-2xl w-[70%] small:w-[90%] 
					overflow-hidden small:h-[35vh] 
					relative h-[75vh]
				">
				<img 
					src="others/options.svg"
					alt="options"
					className="
						w-[90%] absolute xlarge:w-[80%]
						-bottom-10 small:bottom-4
					"
				/>
			</div>


			<ClientList/>

			<aside
				id="use-cases"
				className="
					flex w-[70%] text-2xl tracking-tighter 
					gap-4 h-fit text-charcoal-100 z-10
					small:flex-col small:w-[90%]
				"
			>
				<FeatureCard
					title="Approve and launch experiments within hours, not weeks."
					description="Schedule LinkedIn messages across time zones so you never have to wake up at odd hours and miss a lead again."
					className="w-[50%] small:w-full"
				>
					<img 
						src="others/schedule.svg" 
						alt="schedule" 
						className="
							w-[80%] -ml-10 small:w-[90%] small:-ml-0
							xlarge:w-[75%] xlarge:-ml-24 mt-10
						" 
					/>
					<img
						src="others/options.svg"
						alt="options"
						className="
							absolute -bottom-16 right-0 
							small:hidden xlarge:w-[70%]
							xlarge:right-10
						"
					/>
					<img
						src="icons/logo.svg"
						alt="logo"
						className="
							absolute top-5 right-0
							xlarge:right-12
							w-[20%] xlarge:w-[14%]
						"
					/>
				</FeatureCard>

				<aside 
					className="flex flex-col w-[50%] small:w-full gap-4 h-full"
				>
					<FeatureCard
						title="Approve and launch experiments within hours, not weeks."
						description="Schedule LinkedIn messages across time zones so you never have to wake up at odd hours and miss a lead again."
						className="h-[70%]"
					>
						<img 
							className="w-[70%] xlarge:w-[50%]" 
							src="others/timezone.svg" 
							alt="timezone" 
						/>
						<img
							className="absolute bottom-0 right-5 xlarge:right-24 w-[50%] xlarge:w-[30%]"
							src="others/switch.svg"
							alt="switch"
						/>
					</FeatureCard>

					<div
						className="
							bg-bluewash h-[30%] rounded-2xl p-3 py-6
							flex flex-col justify-center items-center gap-2
							xlarge:py-8 xlarge:text-4xl xlarge:gap-8
						"
					>
						<h3>Never miss a lead, starting now!</h3>
						<OnboardingCluster nooffer />
					</div>
				</aside>
			</aside>
		</div>
	</section>
)

export default Features