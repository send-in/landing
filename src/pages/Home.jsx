// #region Imports
import Hero from "../layouts/Hero"
import Navbar from "../components/Navbar"
import Features from "../layouts/Features"
import FAQ from "../layouts/FAQ"
import Pricing from "../layouts/Pricing"
import Footer from "../components/Footer"
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
				rounded-t-3xl w-full h-fit
				flex flex-col items-center px-10 pt-10
				bg-bluewash text-charcoal-100
			"
		>
			<Navbar />
			<Hero />
		</section>

		<Features/>

		<section 
			className="
				rounded-3xl w-full
				flex flex-col items-center  justify-center
                p-10 bg-bluewash text-charcoal-100
			"
		>
			<FAQ/>
			<Pricing/>
		</section>

		<Footer/>
	</main>
  )
}

export default Home