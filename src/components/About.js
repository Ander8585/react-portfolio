import React from "react";
import { personalInfo, skillList, CVpdf } from "../data/dataInfo";
import LinkBtn from "./LinkBtn";
import SkillBar from "./SkillBar";
import "./About.css";

const About = () => {
	return (
		<section
			id="about"
			className="about section mycontainer lg:w-full lg:min-h-screen"
		>
			<article className="lg:text-right">
				<aside className="text-center lg:text-right">
					<h1>{personalInfo && personalInfo.name}</h1>
					<h5>{personalInfo.professionalTitle}</h5>
				</aside>
				{personalInfo.details}
				<div className="text-center lg:text-left">
					<LinkBtn
						href={CVpdf} /* "https://ander8585.github.io/react-portfolio/" */
					>
						{personalInfo.buttonCV}
					</LinkBtn>
				</div>
			</article>
			<article className="flex flex-col">
				<img
					className="filter grayscale"
					src={personalInfo.profilePic}
					alt={personalInfo.altProfilePic}
				/>
			</article>
			<article className="skills">
				<h2 className="text-center lg:text-left">{personalInfo.skillsTitle}</h2>
				{skillList.map((el, index) => (
					<SkillBar key={index} data={el} />
				))}
			</article>
		</section>
	);
};

export default About;
