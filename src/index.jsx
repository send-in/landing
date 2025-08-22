// #region Imports
import "./styles/index.css"

import App from "./pages/App"

import { createRoot } from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router"
// #endregion

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
	<>
		<BrowserRouter>
			<Routes>
				<Route index element={<App />} />
				<Route path="*" element={<App />} />
			</Routes>
		</BrowserRouter>
	</>
)
