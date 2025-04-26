import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout/Layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeConfigs } from "./routes/config.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Layout>
				<Routes>
					{routeConfigs.map(({ path, element }, index) => (
						<Route key={index} path={path} element={element} />
					))}
				</Routes>
			</Layout>
		</BrowserRouter>
	</StrictMode>
);
