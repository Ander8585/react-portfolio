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
import ModalPortfolio from "./ModalPortfolio";
import { portfolioData, portfolioSectionTitle } from "../data/dataInfo";

const Portfolio = () => {
	return (
		<HashRouter>
			<section id="portfolio" className="portfolio section">
				<div className="my-container">
					<h2 className="section-title">{portfolioSectionTitle}</h2>
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
