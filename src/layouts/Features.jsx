// #region Imports
import FeatureCard from "../components/FeatureCard"
import OnboardingCluster from "../components/OnboardingCluster"
// #endregion


const Features = () => {
	
	return (
		<section
			className="
				flex flex-col items-center z-10
				text-center p-8 gap-24 relative
				bg-white w-screen min-h-screen
			"
		>
			<div
				className="
					 w-full h-[80%] flex flex-col 
					 justify-center items-center
					bg-bluewash rounded-3xl 
					bg-gradient bg-cover bg-center
				"
			>

				<h2>Bulk Schedule DMs</h2>

				<div
					className="
						grid grid-cols-4 grid-rows-3 gap-6
						h-[60%] w-[80%]
					"
				>
					<FeatureCard 
						index={0}
						title="Bulk Scheduling" 
						element={
							<img
								className=""
								src="/schedule.png"
								alt="schedule"
							/>
						}
					/>
					<FeatureCard 
						index={1}
						title="Time Zone Intelligence"
						element={
							<img
								className=""
								src="/timezone.png"
								alt="schedule"
							/>
						}
					/>
					<FeatureCard 
						index={2}
						title="Never miss a lead, starting now !"
						element={
							<OnboardingCluster
								nooffer
							/>
						}
					/>
				</div>
			</div>
		</section>
	)
}

export default Features