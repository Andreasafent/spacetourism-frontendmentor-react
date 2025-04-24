function Header() {
	return (
		<header className="h-[88px] flex justify-between items-center p-[24px] sm:p-0 sm:h-[96px]">
			<div className="h-full sm:px-[40px] flex items-center">
				<img src="src\assets\shared\logo.svg" className="h-full object-contain sm:w-[48px] sm:h-[48px] " />
			</div>
			<div className="sm:w-full sm:h-[100%] sm:bg-[#181a26]">
				<img src="src\assets\shared\icon-hamburger.svg" className="sm:hidden"/>
                <nav className="hidden sm:flex h-full flex justify-end">
                    <ul className="flex gap-[48px] items-center pe-[40px]">
                        <li className="text-white font-secondary leading-none tracking-[2px] text-base h-full flex items-center relative">
                            <span className="">HOME</span>
                            <span className="absolute bottom-0 left-0 w-full h-[4px] bg-white"></span>
                        </li>
                        <li className="text-white font-secondary leading-none tracking-[2px] text-base h-full flex items-center relative">
                            <span className="">01 DESTINATION</span>
                        </li>
                        <li className="text-white font-secondary leading-none tracking-[2px] text-base h-full flex items-center relative">
                            <span className="">02 CREW</span>
                        </li>
                        <li className="text-white font-secondary leading-none tracking-[2px] text-base h-full flex items-center relative">
                            <span className="">03 TECHNOLOGY</span>
                        </li>
                        
                    </ul>
                </nav>
			</div>
		</header>
	);
}

export default Header;
