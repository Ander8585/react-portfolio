import React from "react";
import HeroImage from "./HeroImage";
import HeroContentWelcome from "./HeroContentWelcome";
import { welcomeMessage } from "../data/dataInfo";

const Home = () => {
	return (
		<section id="home" className="home">
			<HeroImage type="hero-image-home">
				<HeroContentWelcome>{welcomeMessage}</HeroContentWelcome>
			</HeroImage>
		</section>
	);
};

export default Home;
