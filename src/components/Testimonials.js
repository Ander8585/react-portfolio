import React, { useState } from "react";
import HeroImage from "./HeroImage";
import Carousel from "./Carousel";

const Testimonials = () => {
	const [vpWidth, setVpWidth] = useState(window.innerWidth);

	window.addEventListener("resize", () => {
		setVpWidth(window.innerWidth);
	});

	return (
		<section id="testimonials" className="testimonials">
			<HeroImage type="hero-image-testimonials">
				{vpWidth > 1000 ? <Carousel /> : <h1>ESOOO</h1>}
			</HeroImage>
		</section>
	);
};

export default Testimonials;
