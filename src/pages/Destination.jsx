function Destination() {
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
								src="src\assets\destination\image-moon.png"
								className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] xl:w-[480px] xl:h-[480px]"
							/>
						</div>
					</div>

					<div className="flex flex-col sm:px-[87px] flex-1 xl:px-0 xl:items-start xl:justify-between">
						<div className="px-[40.5px] xl:px-0">
							<ul className="flex justify-center gap-[32px]">
								<li className="h-[32px] leading-none tracking-[2.1px] flex flex-col items-center relative border-b-3 border-white">
									<span className="text-white font-secondary text-[14px] flex justify-center sm:text-[16px]">
										MOON
									</span>
								</li>
								<li className="h-[32px] leading-none tracking-[2.1px] flex flex-col items-center relative">
									<span className="text-white font-secondary text-[14px] flex justify-center sm:text-[16px]">
										MARS
									</span>
								</li>
								<li className="h-[32px] leading-none tracking-[2.1px] flex flex-col items-center relative">
									<span className="text-white font-secondary text-[14px] flex justify-center sm:text-[16px]">
										EUROPA
									</span>
								</li>
								<li className="h-[32px] leading-none tracking-[2.1px] flex flex-col items-center relative">
									<span className="text-white font-secondary text-[14px] flex justify-center sm:text-[16px]">
										TITAN
									</span>
								</li>
							</ul>
						</div>

						<div className="flex justify-center mt-[24px]">
							<h1 className="text-white font-title text-[56px] leading-none sm:text-[80px] xl:text-[96px]">
								MOON
							</h1>
						</div>

						<div className="mt-[16px]">
							<p className="font-primary text-[#D0D6F9] text-center text-[15px] leading-[28px] tracking-0 sm:leading-[28.8px] xl:text-start sm:text-[16px] xl:text-[18px] leading-[32.4px]">
								See our planet as you’ve never seen it before. A
								perfect relaxing trip away to help regain
								perspective and come back refreshed. While
								you’re there, take in some history by visiting
								the Luna 2 and Apollo 11 landing sites.
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
								<div className="font-title text-white text-[28px] leading-none ">
									384,400 KM
								</div>
							</div>
							<div className="flex flex-col items-center gap-[12px] xl:items-start flex-1">
								<div className="font-secondary text-[#D0D6F9] text-[14px] leading-none tracking-[2px]">
									EST. TRAVEL TIME
								</div>
								<div className="font-title text-white text-[28px] leading-none">
									3 DAYS
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
