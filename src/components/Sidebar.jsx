function Sidebar({ open, setOpen }) {
	return (
		<div className={`sm:hidden text-white fixed h-full bg-white/3 backdrop-blur-[20px] w-[70%] right-0 top-0 z-50 flex flex-col gap-[48px] ps-[32px] transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
			<div className="flex justify-end py-[32px] px-[24px]">
				<button 
                    className="flex items-center cursor-pointer"
                    onClick={()=>setOpen(false)}
                >
					<img src="./assets/shared/icon-close.svg" alt="" />
				</button>
			</div>
			<div className="">
				<nav className="">
					<ul className="flex flex-col gap-[32px]">
						<li className="flex gap-[12px] tracking-[2.7px] border-r-3 cursor-pointer">
							<span className="font-secondary-bold">00</span>
							<span className="font-secondary">HOME</span>                            
						</li>
						<li className="flex gap-[12px] tracking-[2.7px] cursor-pointer">
							<span className="font-secondary-bold">01</span>
							<span className="font-secondary">DESTINATION</span>
						</li>
						<li className="flex gap-[12px] tracking-[2.7px] cursor-pointer">
							<span className="font-secondary-bold">02</span>
							<span className="font-secondary">CREW</span>
						</li>
						<li className="flex gap-[12px] tracking-[2.7px] cursor-pointer">
							<span className="font-secondary-bold">03</span>
							<span className="font-secondary">TECHNOLOGY</span>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Sidebar;
