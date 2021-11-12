import React from "react";
import HeroImage from "./HeroImage";
import HeroContentWelcome from "./HeroContentWelcome";

const Home = () => {
	return (
		<section id="home" className="home">
			<HeroImage type="hero-image-home">
				<HeroContentWelcome />
			</HeroImage>
		</section>
	);
};

export default Home;
