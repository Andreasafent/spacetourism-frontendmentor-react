import Header from "./Header";

function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen bg-cover bg-center bg-[url(./assets/home/background-home-mobile.jpg)] sm:bg-[url(./assets/home/background-home-tablet.jpg)] xl:bg-[url(./assets/home/background-home-desktop.jpg)]">
			<Header />
			{children}
		</div>
	);
}

export default Layout;
