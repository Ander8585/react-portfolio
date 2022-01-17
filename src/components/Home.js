import React from "react";
import HeroImage from "./HeroImage";
import HeroContentWelcome from "./HeroContentWelcome";
import {
	heroImageDataHome,
	welcomeButtonText,
	welcomeMessage,
} from "../data/dataInfo";

const Home = () => {
	return (
		<section id="home" className="home">
			<HeroImage heroImageData={heroImageDataHome}>
				<HeroContentWelcome buttonText={welcomeButtonText}>
					{welcomeMessage}
				</HeroContentWelcome>
			</HeroImage>
		</section>
	);
};

export default Home;
