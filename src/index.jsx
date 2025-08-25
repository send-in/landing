// #region Imports
import "./index.css"

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
import Blogs from "./pages/Content/Blogs"
import BulkScheduleBlog from "./pages/Content/BulkSchedule"
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


				<Route path="/blogs" element={<Blogs />} />
				<Route path="/blog/chrome-extension" element={<Home />} />
				<Route path="/blog/bulk-schedule" element={<BulkScheduleBlog />} />
				<Route path="/blog/message-templates" element={<Home />} />
				<Route path="/blog/timezone-intelligence" element={<Home />} />
				<Route path="/blog/use-cases" element={<Home />} />
			</Routes>
		</BrowserRouter>
	</>
)
