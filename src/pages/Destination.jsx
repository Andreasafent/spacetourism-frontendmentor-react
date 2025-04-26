import { useState } from "react";
import data from "../data/data.json";

function Destination() {
	const [destination, setDestination] = useState(data.destinations[1]);

	return (
		<main className="w-full p-[24px] sm:p-[40px] flex flex-1 xl:px-[165px]">
			<div className="flex flex-col gap-[32px] flex-1 xl:items-center xl:gap-[151px]">
				<div className="text-white flex justify-center gap-[24px] sm:text-[20px] sm:self-start ">
					<span className="font-secondary-bold leading-none tracking-[2.4px] opacity-25">
						01
					</span>
					<span className="font-secondary leading-none tracking-[2.4px]">
						PICK YOUR DESTINATION
					</span>
				</div>

				<div className="flex flex-col xl:flex-row gap-[32px] xl:gap-[108.5px]">
					<div className="flex justify-center items-center gap-[24px] w-full xl:w-1/2">
						<div className="py-[26.5px] sm:py-[42px] xl:py-0">
							<img
								src={destination.images.png}
								className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] xl:w-[480px] xl:h-[480px]"
							/>
						</div>
					</div>

					<div className="flex flex-col sm:px-[87px] flex-1 xl:px-0 xl:items-start xl:justify-between">
						<div className="px-[40.5px] xl:px-0">
							<ul className="flex justify-center gap-[32px] flex-wrap">
								{data.destinations.map((dest, index) => (
									<li key={index} className={`h-[32px] leading-none tracking-[2.1px] flex flex-col items-center relative cursor-pointer ${destination.name === dest.name ? 'border-b-3 border-white': 'hover:border-white/50'} hover:border-b-3 `} onClick={()=>setDestination(dest)}>
										<button 
											className="text-white font-secondary text-[14px] flex justify-center sm:text-[16px] uppercase cursor-pointer"
											
										>
											{dest.name}
										</button>
									</li>
								))}
							</ul>
						</div>

						<div className="flex justify-center mt-[24px]">
							<h1 className="text-white font-title text-[56px] leading-none sm:text-[80px] xl:text-[96px] uppercase">
								{destination.name}
							</h1>
						</div>

						<div className="mt-[16px]">
							<p className="font-primary text-[#D0D6F9] text-center text-[15px] leading-[28px] tracking-0 sm:leading-[28.8px] xl:text-start sm:text-[16px] xl:text-[18px] leading-[32.4px]">
								{destination.description}
							</p>
						</div>

						<div className=" w-full py-[24px] ">
							<span className="block h-[1px] bg-white/15 w-full"></span>
						</div>

						<div className="flex flex-col gap-[24px] sm:flex-row sm:justify-around w-full xl:justify-start">
							<div className="flex flex-col items-center gap-[12px] xl:items-start flex-1">
								<div className="font-secondary text-[#D0D6F9] text-[14px] leading-none tracking-[2px]">
									AVG. DISTANCE
								</div>
								<div className="font-title text-white text-[28px] leading-none uppercase">
									{destination.distance}
								</div>
							</div>
							<div className="flex flex-col items-center gap-[12px] xl:items-start flex-1">
								<div className="font-secondary text-[#D0D6F9] text-[14px] leading-none tracking-[2px]">
									EST. TRAVEL TIME
								</div>
								<div className="font-title text-white text-[28px] leading-none uppercase">
									{destination.travel}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Destination;