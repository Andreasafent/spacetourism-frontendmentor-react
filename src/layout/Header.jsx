import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { routeConfigs } from "../routes/config";

function Header() {
	const [open, setOpen] = useState(false);

	const location = useLocation();
	const currentPage =
		location.pathname.slice(1) === "" ? "home" : location.pathname.slice(1);

	return (
		<>
			<header className="w-full  flex justify-between items-center p-[24px] sm:p-0 sm:h-[96px] xl:mt-[40px] ">
				<div className="h-full flex items-center sm:px-[40px] xl:px-[48px] flex-shrink-0">
					<img
						src="./assets/shared/logo.svg"
						className="h-full object-contain sm:w-[48px] sm:h-[48px] xl:w-[48px] xl:h-[48px]"
					/>
				</div>

				<div className="hidden xl:block flex-grow border-1 border-white/30 mx-8 mr-[-32px] z-1"></div>

				<div className="flex justify-end flex-grow sm:h-full sm:bg-[#181a26] max-w-[1024px] xl:bg-white/5 xl:backdrop-blur-[20px]">
					<button
						className="flex items-center cursor-pointer"
						onClick={() => setOpen(true)}
					>
						<img
							src="./assets/shared/icon-hamburger.svg"
							className="sm:hidden"
						/>
					</button>
					<nav className="hidden sm:flex h-full w-full px-[40px]">
						<ul className="flex w-full justify-around">
							{routeConfigs.map(({ path, label }, index) => (
								<li
									key={index}
									className="text-white leading-none tracking-[2px] text-base h-full flex items-center relative"
								>
									<NavLink to={path}>
										<div className="flex gap-[12px] justify-center items-center justify-center">
											<span className="font-secondary-bold">
												0{index}
											</span>
											<span className="font-secondary uppercase">
												{label}
											</span>

											{currentPage === `${label}` && (
												<span className="absolute bottom-0 left-0 w-full h-[4px] bg-white"></span>
											)}
										</div>
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>

			<Sidebar open={open} setOpen={setOpen} />
		</>
	);
}

export default Header;
