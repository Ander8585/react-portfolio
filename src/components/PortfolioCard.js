import React from "react";
import "./PortfolioCard.css";
import { Link } from "react-router-dom";

const PortfolioCard = ({ data }) => {
	return (
		<Link to={data.href} className="portfolio-card">
			<img src={data.img} alt={data.imgAlt} />
			<aside className="portfolio-card-info">
				<div>
					<h3>{data.title}</h3>
					<p>{data.description}</p>
				</div>
			</aside>
		</Link>
	);
};

export default PortfolioCard;
