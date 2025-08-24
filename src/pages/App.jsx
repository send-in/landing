// #region Imports
import { 
    ReactLenis 
} from "@studio-freight/react-lenis"

import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer"
import Home from "./Home"
// #endregion

const App = () => {
	return (
        <ReactLenis
            className="home p-2 w-screen h-screen flex flex-col items-center"
            root={true}
            options={{
                smoothWheel: true,
                duration: 3,
                lerp: 0.02,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            }}
        >
            <AnimatePresence>
                <Home />
                <Footer />
            </AnimatePresence>
        </ReactLenis>
	)
}

export default App
