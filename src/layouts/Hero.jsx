// #region Imports
import ClientList from "../components/ClientList"
import OnboardingCluster from "../components/OnboardingCluster"
// #endregion

const Hero = () => {
	return (
		<section 
			className="
				flex flex-col items-center z-10
				text-center p-20 gap-24 relative
			"
		>

			<aside
				className="flex flex-col gap-2 items-center mb-12"
			>
				<h1
					className="
						w-[60%] tracking-tighter
						font-medium text-8xl
					"
				>
					<span className="title-gradient">
						Schedule Linkedin Outreach.{" "}
					</span>
						At Scale.
				</h1>

				<p 
					className="
						w-[40%] font-normal tracking-tight
						text-xl text-grey-300
					"
				>
					Schedule LinkedIn messages across time zones so you never have to wake 
					up at odd hours and miss a lead again.
				</p>
			</aside>


			<OnboardingCluster/>

			<img
				className="relative z-10 w-[35%]"
				src="/extension.png" 
				alt="extension"
			/>

			<ClientList/>

			<img 
				className="
					rounded-full h-[90%] absolute top-[32%] z-0

				"
				src="/grainy.svg" 
				alt="gradient"
			/>
		</section>
	)
}

export default Hero
