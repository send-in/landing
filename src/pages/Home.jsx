// #region Imports
import Hero from "../layouts/Hero"
import Navbar from "../components/Navbar"
import Features from "../layouts/Features"
import FAQ from "../layouts/FAQ"
import Pricing from "../layouts/Pricing"
// #endregion

const Home = () => (
	<main
		className="
			flex flex-col items-center relative h-fit 
			overflow-x-clip overscroll-contain 
			snap-y snap-scroll-points z-20 p-4
			select-none font-mada w-screen mb-[52vh] small:mb-0
		"
	>
		<section 
			className="
				rounded-t-3xl w-full h-screen
				flex flex-col items-center px-10 pt-10
				bg-bluewash text-charcoal-100 small:px-3
				overflow-hidden
			"
		>
			<Navbar />
			<Hero />
		</section>

		<section 
			className="
				bg-white flex flex-col  items-center relative  
				w-screen h-fit overflow-x-clip overscroll-contain 
				snap-y snap-scroll-points z-20 select-none 
				cursor-pin p-4 small:pb-0
			"
		>

			<Features/>
			<aside 
				className="
					rounded-3xl w-full
					flex flex-col items-center justify-center
					p-10 bg-bluewash text-charcoal-100
				"
			>
				<Pricing/>
				<FAQ/>
			</aside>
		</section>
	</main>
)

export default Home