import React, { useEffect, useState } from "react";
import MenuBtn from "./MenuBtn";
import Menu from "./Menu";
import Logo from "./Logo";
import { menuItems } from "../data/dataInfo";
import { logoSvg } from "../data/dataInfo";

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
				<Logo logoSvg={logoSvg} />
				<MenuBtn isOpen={isOpenMenu} onClick={showMenu} />
				<Menu isOpen={isOpenMenu} onClick={closeMenu} menuItems={menuItems} />
			</section>
		</header>
	);
};

export default PortfolioHeader;
