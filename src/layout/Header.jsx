import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Header() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		console.log(open);
	}, [open]);

	return (
		<>
			<header className="w-full h-[88px] flex justify-between items-center p-[24px] sm:p-0 sm:h-[96px] xl:mt-[40px]">
				<div className="h-full flex items-center sm:px-[40px] xl:px-[48px]">
					<img
						src="src\assets\shared\logo.svg"
						className="h-full object-contain sm:w-[48px] sm:h-[48px] xl:w-[48px] xl:h-[48px]"
					/>
				</div>

				<div className="hidden xl:block flex-grow border-1 border-white/30 mx-8 mr-[-32px] z-1"></div>

				<div className="sm:w-full sm:h-[100%] sm:bg-[#181a26] max-w-[1024px] xl:bg-white/5 xl:backdrop-blur-[20px]">
					<button
						className="flex items-center"
						onClick={() => setOpen(true)}
					>
						<img
							src="src\assets\shared\icon-hamburger.svg"
							className="sm:hidden"
						/>
					</button>
					<nav className="hidden sm:flex h-full flex justify-end">
						<ul className="flex gap-[48px] items-center pe-[40px]">
							<li className="text-white font-secondary leading-none tracking-[2px] text-base h-full flex items-center relative">
								<span className="">HOME</span>
								<span className="absolute bottom-0 left-0 w-full h-[4px] bg-white"></span>
							</li>
							<li className="text-white leading-none tracking-[2px] text-base h-full flex items-center relative">
								<div className="flex gap-[12px] justify-center items-center justify-center">
									<span className="font-secondary-bold">
										01
									</span>
									<span className="font-secondary">
										DESTINATION
									</span>
								</div>
							</li>
							<li className="text-white leading-none tracking-[2px] text-base h-full flex items-center relative">
								<div className="flex gap-[12px] justify-center items-center justify-center">
									<span className="font-secondary-bold">
										02
									</span>
									<span className="font-secondary">CREW</span>
								</div>
							</li>
							<li className="text-white leading-none tracking-[2px] text-base h-full flex items-center relative">
								<div className="flex gap-[12px] justify-center items-center justify-center">
									<span className="font-secondary-bold">
										03
									</span>
									<span className="font-secondary">
										TECHNOLOGY
									</span>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<Sidebar open={open} setOpen={setOpen} />
		</>
	);
}

export default Header;
