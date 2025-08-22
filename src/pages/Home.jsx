// #region Imports
import Hero from "../layouts/Hero"
import Navbar from "../components/Navbar"
import Features from "../layouts/Features"
import FAQ from "../layouts/FAQ"
// #endregion

const Home = () => {
  
  return (
	<main
		className="
			flex flex-col items-center relative h-fit 
			overflow-x-clip overscroll-contain 
			snap-y snap-scroll-points z-20 p-2
			mb-[100vh] small:mb-0 select-none
			font-mada
		"
	>
		<section 
			className="
				rounded-3xl w-full h-fit
				flex flex-col items-center p-10
				bg-bluewash text-charcoal-100
			"
		>
			<Navbar />
			<Hero />
			<Features/>
		</section>


		<section 
			className="
				rounded-3xl w-full
				flex flex-col items-center p-10
				bg-bluewash text-charcoal-100
			"
		>
			<FAQ/>
		</section>
	</main>
  )
}

export default Home