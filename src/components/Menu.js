import React, { useState, useEffect } from "react";

const Menu = ({ isOpen, onClick }) => {
	const [isVisible, setIsVisible] = useState("menu");

	useEffect(() => {
		isOpen ? setIsVisible("menu is-active") : setIsVisible("menu");
	}, [isOpen]);

	return (
		<nav className={isVisible} onClick={onClick}>
			<a href="#home">Inicio</a>
			<a href="#about">Acerca</a>
			<a href="#services">Servicios</a>
			<a href="#portfolio">Portafolio</a>
			<a href="#testimonials">Testimonios</a>
			<a href="#contacts">Contacto</a>
		</nav>
	);
};

export default Menu;
