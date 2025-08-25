// #region Imports
import "./styles/index.css"

import Home from "./pages/Home"
import CookiePolicy from "./pages/Policy/CookiePolicy"
import TermsAndConditions from "./pages/Policy/TermsCondition"
import Pricing from "./pages/Policy/Pricing"
import Support from "./pages/Support"

import { 
	BrowserRouter, 
	Routes, 
	Route 
} from "react-router"
import { createRoot } from "react-dom/client"
// #endregion

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
	<>
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="*" element={<Home />} />

				<Route path="/terms-conditions" element={<TermsAndConditions />} />
				<Route path="/pricing" element={<Pricing />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
				<Route path="/support" element={<Support />} />


				<Route path="/blogs" element={<Home />} />
				<Route path="/blog/chrome-extension" element={<Home />} />
				<Route path="/blog/bulk-schedule" element={<Home />} />
				<Route path="/blog/message-templates" element={<Home />} />
				<Route path="/blog/timezone-intelligence" element={<Home />} />
			</Routes>
		</BrowserRouter>
	</>
)
