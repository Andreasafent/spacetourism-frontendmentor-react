import { NavLink, useLocation } from "react-router-dom";
import { routeConfigs } from "../routes/config";

function Sidebar({ open, setOpen }) {
	const location = useLocation();

	console.log(location.pathname.slice(1));

	const currentPage =
		location.pathname.slice(1) === "" ? "home" : location.pathname.slice(1);

	return (
		<div
			className={`sm:hidden text-white fixed h-full bg-white/3 backdrop-blur-[20px] w-[70%] right-0 top-0 z-50 flex flex-col gap-[48px] ps-[32px] transform transition-transform duration-300 ease-in-out ${
				open ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div className="flex justify-end py-[32px] px-[24px]">
				<button
					className="flex items-center cursor-pointer"
					onClick={() => setOpen(false)}
				>
					<img src="./assets/shared/icon-close.svg" alt="" />
				</button>
			</div>
			<div className="">
				<nav className="">
					<ul className="flex flex-col gap-[32px]">
						{routeConfigs.map(({ path, label }, index) => (
							<NavLink to={path} key={index}>
								<li									
									className={`flex gap-[12px] tracking-[2.7px] cursor-pointer ${
										currentPage === label && "border-r-3"
									}`}
									onClick={()=>setOpen(false)}
								>
									<span className="font-secondary-bold">
										0{index}
									</span>
									<span className="font-secondary uppercase">
										{label}
									</span>
								</li>
							</NavLink>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Sidebar;
