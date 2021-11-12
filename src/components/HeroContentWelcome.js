import React from "react";
import "./HeroContentWelcome.css";
import LinkBtn from "./LinkBtn";

const HeroContentWelcome = () => {
	return (
		<div className="hero-image-content">
			<h2 className="hero-image-title">
				Bienvenid@s
				<br />a mi sitio
			</h2>
			<LinkBtn href="#contacts">CONTÁCTAME</LinkBtn>
		</div>
	);
};

export default HeroContentWelcome;
