// #region Imports
import "./styles/index.css"

import App from "./pages/App"

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
				<Route index element={<App />} />
				<Route path="*" element={<App />} />

				<Route path="/tutorials" element={<App />} />
				<Route path="/support" element={<App />} />
				<Route path="/cookie-policy" element={<App />} />
				<Route path="/terms-conditions" element={<App />} />
				<Route path="/getting-started" element={<App />} />
				<Route path="/blogs" element={<App />} />

				<Route path="/blog/chrome-extension" element={<App />} />
				<Route path="/blog/bulk-schedule" element={<App />} />
				<Route path="/blog/message-templates" element={<App />} />
				<Route path="/blog/timezone-intelligence" element={<App />} />
			</Routes>
		</BrowserRouter>
	</>
)
