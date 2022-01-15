import React from "react";
import HeroImage from "./HeroImage";
import { heroImageDataTestimonials, slides } from "../data/dataInfo";

import ResponsiveCarousel2D3D from "./ResponsiveCarousel2D3D";

const Testimonials = () => {
	return (
		<section className="testimonials" id="testimonials">
			<HeroImage heroImageData={heroImageDataTestimonials}>
				<h2 className="section-title">Testimonios</h2>
				<ResponsiveCarousel2D3D slides={slides} />
			</HeroImage>
		</section>
	);
};

export default Testimonials;
