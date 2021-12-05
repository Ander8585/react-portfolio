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
import img1 from "../assets/portfolio-1.jpg";
import img2 from "../assets/portfolio-2.jpg";
import img3 from "../assets/portfolio-3.jpg";
import img4 from "../assets/portfolio-4.jpg";
import img5 from "../assets/portfolio-5.jpg";
import img6 from "../assets/portfolio-6.jpg";
import ModalPortfolio from "./ModalPortfolio";

const data = [
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
];

const modalData = [
	{
		img: img1,
		imgAlt: "Trabajo-1",
		title: "Nombre del proyecto 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
		clientName: "Cliente 1",
		date: "10/10/21",
		type: "Sitio Web",
		link: "http://index.html",
	},
	{
		img: img2,
		imgAlt: "Trabajo-2",
		title: "Nombre del proyecto 2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
		clientName: "Cliente 1",
		date: "10/10/21",
		type: "Sitio Web",
		link: "http://index.html",
	},
	{
		img: img3,
		imgAlt: "Trabajo-3",
		title: "Nombre del proyecto 3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur nisi reiciendis incidunt, ipsam at, exercitatione est tempore vero possimus harum mollitia quam eum numquam consectetur alias provident hic culpa necessitatibus!",
		clientName: "Cliente 1",
		date: "10/10/21",
		type: "Sitio Web",
		link: "http://index.html",
	},
	{
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
					<PortfolioCard data={data[0]} />
					<PortfolioCard data={data[1]} />
					<PortfolioCard data={data[2]} />
					<PortfolioCard data={data[3]} />
					<PortfolioCard data={data[4]} />
					<PortfolioCard data={data[5]} />
				</div>
			</section>
			<Routes>
				<Route path="work-1" element={<ModalPortfolio data={modalData[0]} />} />
				<Route path="work-2" element={<ModalPortfolio data={modalData[1]} />} />
				<Route path="work-3" element={<ModalPortfolio data={modalData[2]} />} />
				<Route path="work-4" element={<ModalPortfolio data={modalData[3]} />} />
				<Route path="work-5" element={<ModalPortfolio data={modalData[4]} />} />
				<Route path="work-6" element={<ModalPortfolio data={modalData[5]} />} />
			</Routes>
		</HashRouter>
	);
};

export default Portfolio;