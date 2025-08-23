// #region Imports
import ClientList from "../components/ClientList"
import OnboardingCluster from "../components/OnboardingCluster"
// #endregion

const Hero = () => {
	return (
		<section 
			className="
				flex flex-col items-center z-10
				text-center p-20 pt-10 gap-6 relative
			"
		>

			<aside
				className="flex flex-col gap-2 items-center mb-20"
			>
				<h1
					className="
						w-[60%] tracking-tighter
						font-medium text-6xl
					"
				>
					<span className="title-gradient">
						Schedule Linkedin Outreach.{" "}
					</span>
						At Scale.
				</h1>

				<p 
					className="
						w-[45%] font-normal tracking-tight
						text-md text-grey-300 
					"
				>
					Schedule LinkedIn messages across time zones so you never have to wake 
					up at odd hours and miss a lead again.
				</p>
			</aside>


			<OnboardingCluster/>

			<img
				className="relative z-10 w-[30%]"
				src="/extension.png" 
				alt="extension"
			/>

			<ClientList/>

			<div 
				className="
					rounded-full h-[60vw] w-[60vw] absolute top-[25%] z-0 bgGradient
				"
			/>
		</section>
	)
}

export default Hero
