// #region Imports
import Hero from "../layouts/Hero"
import Navbar from "../components/Navbar"
import Features from "../layouts/Features"
import FAQ from "../layouts/FAQ"
import Pricing from "../layouts/Pricing"
// #endregion

const Home = () => {
  
  return (
	<main
		className="
			flex flex-col items-center relative h-fit 
			overflow-x-clip overscroll-contain 
			snap-y snap-scroll-points z-20 p-4
			select-none font-mada w-screen
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

        <section 
			className="bg-white flex flex-col  items-center relative  w-screen h-fit overflow-x-clip overscroll-contain snap-y snap-scroll-points z-20 select-none cursor-pin p-4 mb-[79vh] small:mb-0 "
		>

            <Features/>
            <aside 
                className="
                    rounded-3xl w-full
                    flex flex-col items-center  justify-center
                    p-10 bg-bluewash text-charcoal-100
                "
            >
                <FAQ/>
                <Pricing/>
            </aside>
        </section>

	</main>
  )
}

export default Home