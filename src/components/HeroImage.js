import React from "react";
import "./HeroImage.css";

const HeroImage = ({ children, type }) => {
	return (
		<article className={`hero-image ${type}`}>
			<aside className={`hero-image-opacity ${type}`}>{children}</aside>
		</article>
	);
};

export default HeroImage;
