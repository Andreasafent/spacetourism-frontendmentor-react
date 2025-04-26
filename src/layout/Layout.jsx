import { useLocation } from "react-router-dom";
import Header from "./Header";

function Layout({ children }) {
	const location = useLocation();

	const backgroundImages = {
		"/": {
			mobile: "bg-[url(/assets/home/background-home-mobile.jpg)]",
			tablet: "sm:bg-[url(/assets/home/background-home-tablet.jpg)]",
			desktop: "xl:bg-[url(/assets/home/background-home-desktop.jpg)]",
		},
		"/destination": {
			mobile: "bg-[url(/assets/destination/background-destination-mobile.jpg)]",
			tablet: "sm:bg-[url(/assets/destination/background-destination-tablet.jpg)]",
			desktop:"xl:bg-[url(/assets/destination/background-destination-desktop.jpg)]",
		},
		"/crew": {
			mobile: "bg-[url(/assets/crew/background-crew-mobile.jpg)]",
			tablet: "sm:bg-[url(/assets/crew/background-crew-tablet.jpg)]",
			desktop: "xl:bg-[url(/assets/crew/background-crew-desktop.jpg)]",
		},
		"/technology": {
			mobile: "bg-[url(/assets/technology/background-technology-mobile.jpg)]",
			tablet: "sm:bg-[url(/assets/technology/background-technology-tablet.jpg)]",
			desktop: "xl:bg-[url(/assets/technology/background-technology-desktop.jpg)]",
		},
	};

	const currentBg = backgroundImages[location.pathname] || backgroundImages['/'];



	return (
		<div className={`flex flex-col items-center min-h-screen bg-cover bg-center ${currentBg.mobile} ${currentBg.tablet} ${currentBg.desktop}`}>
			<Header />
			{children}
		</div>
	);
}

export default Layout;
