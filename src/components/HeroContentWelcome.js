import React from "react";
import "./HeroContentWelcome.css";
import LinkBtn from "./LinkBtn";

const HeroContentWelcome = ({ children, buttonText }) => {
	return (
		<div className="hero-image-content">
			<h2 className="hero-image-title pb-3">{children}</h2>
			<LinkBtn href="#contacts">{buttonText}</LinkBtn>
		</div>
	);
};

export default HeroContentWelcome;
