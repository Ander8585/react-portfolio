import React from "react";
import {
	/* 	BrowserRouter as Router, */
	Route,
	Routes,
	HashRouter,
	/* Link, */
} from "react-router-dom";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";
import img1 from "../assets/token.jpg";
import img2 from "../assets/portfolioPic.jpg";
import img3 from "../assets/portfolio-3.jpg";
import img4 from "../assets/portfolio-4.jpg";
import img5 from "../assets/portfolio-5.jpg";
import img6 from "../assets/portfolio-6.jpg";
import ModalPortfolio from "./ModalPortfolio";

/* const data = [
	{
		href: "work-1",
		img: img1,
		imgAlt: "Trabajo-1",
		title: "Proyecto 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
	},
	{
		href: "work-2",
		img: img2,
		imgAlt: "Trabajo-2",
		title: "Proyecto 2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
	},
	{
		href: "work-3",
		img: img3,
		imgAlt: "Trabajo-3",
		title: "Proyecto 3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
	},
	{
		href: "work-4",
		img: img4,
		imgAlt: "Trabajo-4",
		title: "Proyecto 4",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
	},
	{
		href: "work-5",
		img: img5,
		imgAlt: "Trabajo-5",
		title: "Proyecto 5",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
	},
	{
		href: "work-6",
		img: img6,
		imgAlt: "Trabajo-6",
		title: "Proyecto 6",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
	},
]; */

const portfolioData = [
	{
		href: "work-1",
		img: img1,
		imgAlt: "TokenP",
		title: "Llave Hardware",
		description:
			"Token Criptográfico que permite firmar digitalmente documentos y cifrar información en ficheros. Tiene implementado diferentes algoritmos de seguridad como RSA, ECDSA, AES y GOST. Cuenta con protección ante ataques de Side Channel y su principal objetivo es que las llaves privadas siempre permanezcan almacenadas de manera segura en el dispositivo y nunca se copien hacia el ordenador.",
		clientName: "Datys",
		date: "01/10/14",
		type: "Diseño hardware y Criptografía",
		link: "",
	},
	{
		href: "work-2",
		img: img2,
		imgAlt: "Portfolio responsive",
		title: "Portafolio Web",
		description:
			"Portafolio Web SPA diseñado con el objetivo de mostrar información sobre mis habilidades profesionales de manera más accesible y organizada. Se utilizaron herramientas Frontend y de diseño UI/UX como Figma, React, TailwindCSS, SASS y se utilizó la API FormSubmit para procesar los formularios. Se programó de manera tal que sea sencillo mantener y actualizar la página",
		clientName: "Ander Torres",
		date: "07/12/21",
		type: "Sitio Web",
		link: "http://ander8585.github.io/react-portfolio",
	},
	{
		href: "work-3",
		img: img3,
		imgAlt: "Trabajo-3",
		title: "Consultoría Sector Industrial",
		description:
			"Conjunto de trabajos técnicos para la industria cubana específicamente en el área de empaquetado, marcaje, etiquetado y trazabilidad. Este trabajo se ha realizado asociado a Insepra Limited, proveedera de marcas de gran prestigio internacional como Domino printing, Intrex, entre otras. Se han desarrollado varios soluciones para empresas como Papas&Co, ICTSA, Prodal, Eleka, Nescor, Nestle Coralac, Inmunoensayo, entre otras",
		clientName: "Varias empresas de manufactura",
		date: "10/10/21",
		type: "Trabajo Tecnico Industrial",
		link: "https://insepra.com/our-team/",
	},
	{
		href: "work-4",
		img: img4,
		imgAlt: "Trabajo-4",
		title: "Nombre del proyecto 4",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
		clientName: "Cliente 1",
		date: "10/10/21",
		type: "Sitio Web",
		link: "http://index.html",
	},
	{
		href: "work-5",
		img: img5,
		imgAlt: "Trabajo-5",
		title: "Nombre del proyecto 5",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
		clientName: "Cliente 1",
		date: "10/10/21",
		type: "Sitio Web",
		link: "http://index.html",
	},
	{
		href: "work-6",
		img: img6,
		imgAlt: "Trabajo-6",
		title: "Nombre del proyecto 6",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
		clientName: "Cliente 1",
		date: "10/10/21",
		type: "Sitio Web",
		link: "http://index.html",
	},
];

const Portfolio = () => {
	return (
		<HashRouter>
			<section id="portfolio" className="portfolio section">
				<div className="my-container">
					<h2 className="section-title">Mis Trabajos</h2>
					{portfolioData.map((el, index) => (
						<PortfolioCard data={el} key={index} />
					))}
				</div>
			</section>
			<Routes>
				{portfolioData.map((el, index) => (
					<Route
						path={el.href}
						key={index}
						element={<ModalPortfolio data={el} key={"m-" + index} />}
					/>
				))}
			</Routes>
		</HashRouter>
	);
};

export default Portfolio;
