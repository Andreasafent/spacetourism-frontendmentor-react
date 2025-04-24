import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Layout>
			<Home />
		</Layout>
	</StrictMode>
);
