import { NavLink } from "react-router-dom";

function Home() {
	return (
		<>
			<main className="p-[24px] flex-1 sm:py-[128px] flex flex-col xl:px-[165px]">
				<div className="flex flex-col justify-between flex-1 sm:gap-[66px] sm:min-h-full sm:px-[88px] xl:flex-row xl:px-0 xl:items-end">
					<div className="flex flex-col gap-[24px] items-center xl:items-start xl:w-[50%]">
						<p className="text-white font-secondary text-base tracking-[2.4px] sm:text-[28px]">
							SO, YOU WANT TO TRAVEL TO
						</p>
						<p className="text-white font-title text-[80px] text-center sm:text-[144px] leading-none">
							SPACE
						</p>
						<p className="text-white text-center font-primary leading-[28.8px] text-[15px] sm:text-base xl:text-[18px] xl:text-start leading-[32.4px] tracking-0">
							Let's face it; if you want to go to space, you might
							as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax
							because we'll give you a truly out of this world
							experience!
						</p>
					</div>
					<div className="flex items-center justify-center xl:justify-end flex-1 xl:w-[50%] relative">
						<div className="bg-white w-[144px] h-[144px] rounded-full flex items-center justify-center sm:w-[272px] sm:h-[272px] cursor-pointer relative z-10 group">
							<NavLink to={'/destination'}>
								<button className="font-title text-[18px] sm:text-[32px] cursor-pointer">
									EXPLORE
								</button>
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out w-[272px] h-[272px] sm:w-[450px] sm:h-[450px] z-[-1]" />
							</NavLink>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Home;
