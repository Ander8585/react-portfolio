import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ children }) => {
	return (
		<article className="service-card">
			{children.logo}
			{children.title}
			{children.description}
		</article>
	);
};

export default ServiceCard;
