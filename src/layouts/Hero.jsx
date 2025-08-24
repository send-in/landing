// #region Imports
import { 
    useRef 
} from "react"
import { 
    useTransform, 
    useScroll, 
    motion 
} from "framer-motion"

import OnboardingCluster from "../components/CTACluster"
import ClientList from "../components/ClientList"
// #endregion

const Hero = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const nextTransition = useTransform(
        scrollYProgress,
        [0.6, 1],
        ["-55vh", "0vh"],
    )

    const nextTransitionScale = useTransform(
        scrollYProgress, 
        [0, 1], 
        [0.8, 1]
    )

	return (
		<motion.section 
			className="
				flex flex-col items-center z-10
				text-center p-20 pt-10 gap-6 relative
			"
            style={{
                scale: nextTransitionScale,
            }}
		>

			<aside
				className="flex flex-col gap-2 items-center mb-16"
			>
				<h1
					className="
						w-[60%] tracking-tighter
						font-medium text-6xl
					"
				>
					<span className="text-blue-100">
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

            <aside
                className="flex flex-col items-center mt-5"
            >
                <img
                    className="relative z-20 w-[40%] -mb-32"
                    src="others/timezone.svg" 
                    alt="extension"
                />
                <img
                    className="relative z-10 w-full"
                    src="others/textbox.svg" 
                    alt="extension"
                />
            </aside>

			<ClientList/>

			<div 
				className="
					rounded-full h-[70vw] w-[70vw] absolute top-[22%] z-0 bg-blue-100 overflow-clip
				"
			/>

            <motion.div
                className="w-screen h-[20vh] small:h-[20vh] relative "
                ref={ref}
                style={{
                    marginBottom: nextTransition,
                }}
            ></motion.div>
		</motion.section>
	)
}

export default Hero
