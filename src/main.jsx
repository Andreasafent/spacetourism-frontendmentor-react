import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Destination from "./pages/Destination.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/destination" element={<Destination />}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	</StrictMode>
);
