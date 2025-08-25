// #region Imports
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Pricing from '../../layouts/Pricing'
// #endregion

const PricingPage = () => {
	return (
		<main className="bg-bluewash">
            <aside className="mx-auto max-w-xl px-6 py-14 pb-2 text-left text-gray-800 text-charcoal-100">
                <Navbar/>
                <h1 className="text-3xl font-normal tracking-tight text-center mt-12" >
					Pricing
				</h1>
            </aside>
				<Pricing/>

            <Footer fixed={false}/>
        </main>
	)
}

export default PricingPage