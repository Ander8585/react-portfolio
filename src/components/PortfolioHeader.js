import React, { useEffect, useState } from "react";
import MenuBtn from "./MenuBtn";
import Menu from "./Menu";
import Logo from "./Logo";

const PortfolioHeader = ({ actionCloseMenu }) => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const showMenu = (e) => {
		e.stopPropagation();
		setIsOpenMenu(!isOpenMenu);
	};

	const closeMenu = () => {
		setIsOpenMenu(false);
	};

	useEffect(() => {
		closeMenu();
	}, [actionCloseMenu]);

	return (
		<header className="header">
			<section className="my-container">
				<Logo />
				<MenuBtn isOpen={isOpenMenu} onClick={showMenu} />
				<Menu isOpen={isOpenMenu} onClick={closeMenu} />
			</section>
		</header>
	);
};

export default PortfolioHeader;
