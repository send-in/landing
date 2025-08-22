// #region Imports
// import { useState } from "react"
import { ReactLenis } from "@studio-freight/react-lenis"

// import Loading from "../components/Loader/index"
// import Footer from "../components/Footer"

import Home from "./Home"

// #endregion

const App = () => {
//   const [progress, setProgress] = useState(0)

	return (
		<main 
			className="
				p-6 w-screen h-screen
			"
		>

				{/* <ReactLenis
					root={true}
					options={{
						smoothWheel: true,
						duration: 5,
						lerp: 0.02,
						easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
					}}
				> */}

						{/* {progress < 98 && (
							<Loading progress={progress} setProgress={setProgress} />
						)} */}

						<Home />

						{/* <Footer /> */}
				{/* </ReactLenis> */}
		</main>
	)
}

export default App
