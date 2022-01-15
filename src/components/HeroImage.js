import React from "react";
import "./HeroImage.css";

const defaultHeroImageData = {
	attachment: "fixed",
	opacityColor: "rgba(0, 0, 0, 0.5)",
	type: "hero-image-home",
};

const HeroImage = ({ children, heroImageData = defaultHeroImageData }) => {
	return (
		<article
			style={{
				backgroundAttachment: heroImageData.attachment,
			}}
			className={`hero-image ${heroImageData.type}`}
		>
			<aside
				className={`hero-image-opacity`}
				style={{ backgroundColor: heroImageData.opacityColor }}
			>
				{children}
			</aside>
		</article>
	);
};

export default HeroImage;
