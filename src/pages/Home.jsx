// #region Imports
import { 
    ReactLenis 
} from "@studio-freight/react-lenis"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import Hero from "../layouts/Hero"
import Features from "../layouts/Features"
import FAQ from "../layouts/FAQ"
import Pricing from "../layouts/Pricing"
// #endregion

const Home = () => (
	<ReactLenis
		className="w-screen h-screen flex flex-col items-center"
		root={true}
		options={{
			smoothWheel: true,
			duration: 3,
			lerp: 0.02,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		}}
	>
        <main
            className="
                flex flex-col items-center relative h-fit 
                overflow-x-clip overscroll-contain 
                snap-y snap-scroll-points z-20 p-4 xlarge:p-8
                select-none font-mada w-screen xlarge:mb-[52vh] 
                mb-[60vh] small:mb-0
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
                    cursor-pin p-4 xlarge:p-8 small:pb-0
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
		<Footer />
	</ReactLenis>
)

export default Home
