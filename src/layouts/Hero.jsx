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
// #endregion

const Hero = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const nextTransition = useTransform(
        scrollYProgress,
        [0.6, 1],
        ["-20vh", "0vh"],
    )

    const nextTransitionScale = useTransform(
        scrollYProgress, 
        [0, 1], 
        [0.9, 1]
    )

	return (
		<motion.section 
			className="
				flex flex-col items-center z-10
				text-center p-20 pt-10 xlarge:pt-24
                small:pt-8 gap-12 small:gap-8 relative
			"
            style={{
                scale: nextTransitionScale,
            }}
		>

			<aside
				className="flex flex-col gap-4 items-center mb-32 large:mb-16 small:mb-20"
			>
				<h1
					className="
						w-[60%] small:w-[90%] tracking-tighter
						font-medium text-6xl small:text-4xl
                        xlarge:text-7xl
					"
				>
					<span className="text-blue-100">
						Schedule Linkedin Outreach.{" "}
					</span>
						At Scale.
				</h1>

				<p 
					className="
						w-[45%] small:w-[75%] font-normal tracking-tight
						text-md xlarge:text-xl text-grey-300 leading-5
					"
				>
					Schedule LinkedIn messages across time zones so you never have to wake 
					up at odd hours and miss a lead again.
				</p>
			</aside>


			<OnboardingCluster/>

            <aside
                className="flex flex-col items-center mt-5 large:mt-2 small:mt-0"
            >
                <img
                    className="
                        relative z-20 w-[40%] small:w-[50%] 
                        xlarge:w-[45%]
                        -mb-32 small:-mb-12
                    "
                    src="others/timezone.svg" 
                    alt="extension"
                />
                <img
                    className="
                        relative z-10 w-full small:w-[85%]
                        xlarge:w-[35vw] large:w-[40vw]
                    "
                    src="others/textbox.svg" 
                    alt="extension"
                />
            </aside>


			<div 
				className="
					rounded-full absolute small:top-[30%]
                    h-[90vh] w-[90vh] top-[28%]
                    xlarge:h-[100vh] xlarge:w-[100vh]
                    small:h-[160vw] small:w-[160vw] 
                    z-0 bg-blue-100 overflow-clip
				"
			/>

            <motion.div
                className="w-screen h-[12vh] small:h-[20vh] relative "
                ref={ref}
                style={{
                    marginBottom: nextTransition,
                }}
            ></motion.div>
		</motion.section>
	)
}

export default Hero
