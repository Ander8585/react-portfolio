import React, { useState, useEffect } from "react";

const Menu = ({ isOpen, onClick, menuItems }) => {
	const [isVisible, setIsVisible] = useState("menu");

	useEffect(() => {
		isOpen ? setIsVisible("menu is-active") : setIsVisible("menu");
	}, [isOpen]);

	return (
		<nav className={isVisible} onClick={onClick}>
			{menuItems.map((item) => (
				<a key={item.title} href={item.href}>
					{item.title}
				</a>
			))}
		</nav>
	);
};

export default Menu;
