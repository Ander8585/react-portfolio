import React from "react";
import "./HeroContentWelcome.css";
import LinkBtn from "./LinkBtn";

const HeroContentWelcome = ({ children }) => {
	return (
		<div className="hero-image-content">
			<h2 className="hero-image-title">{children}</h2>
			<LinkBtn href="#contacts">CONTÁCTAME</LinkBtn>
		</div>
	);
};

export default HeroContentWelcome;
