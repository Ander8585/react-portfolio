import React from "react";
import profilePic from "../assets/anderTorres-low.jpg";
import LinkBtn from "./LinkBtn";
import SkillBar from "./SkillBar";

const About = () => {
	return (
		<section
			id="about"
			className="about section mycontainer lg:w-full lg:min-h-screen"
		>
			<article className="lg:text-right">
				<aside className="text-center lg:text-right">
					<h1>Ander Torres</h1>
					<h5>Ingeniero en Automatica y Sistemas</h5>
				</aside>
				<p>
					Desde 2007 tengo experiencia en el área del desarrollo
					<i>hardware</i> y <i>software</i> de bajo nivel. Manejo varios
					lenguajes de programación y plataformas de desarrollo <i>hardware</i>.
				</p>
				<p>
					Fui profesor e investigador por varios años en el área de la
					criptografía y también acumulo experiencia en el sector industrial,
					especialmente en el tópico de empaquetado, etiquetado y marcaje de
					productos.
				</p>
				<p>
					Recienmente he estado expandiendo mi perfil hacia el desarrollo
					<i>web</i> y las tecnologías relacionadas con este tema.
				</p>
				<div className="text-center lg:text-left">
					<LinkBtn href="http://index.html">DESCARGA MI CV</LinkBtn>
				</div>
			</article>
			<article className="flex flex-col">
				<img className="filter grayscale" src={profilePic} alt="Ander Torres" />
			</article>
			<article>
				<h2 className="text-center lg:text-left">Mis Habilidades</h2>
				<SkillBar value="30">
					Desarrollo <i>Web Frontend</i>
				</SkillBar>
				<SkillBar value="5">
					Desarrollo <i>Web Backend</i>
				</SkillBar>
				<SkillBar value="70">Automatización Industrial</SkillBar>
				<SkillBar value="90">
					Desarrollo <i>Hardware</i>
				</SkillBar>
				<SkillBar value="75">Criptografía y Seguridad</SkillBar>
			</article>
		</section>
	);
};

export default About;
