// #region Imports
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Pricing from '../../layouts/Pricing'
// #endregion

const PricingPage = () => (
	<main 
		className="bg-bluewash pt-14"
	>
		<aside 
			className="
				w-full px-6 pb-2 text-left text-gray-800 
				text-charcoal-100 flex flex-col items-center
			"
		>
			<Navbar/>

			<h1 
				className="
					text-3xl font-normal tracking-tight 
					text-center mt-12 small:mt-6
				" 
			>
				Pricing
			</h1>
			<Pricing/>
		</aside>

		<Footer 
			fixed={false}
		/>
	</main>
)

export default PricingPage