import React from "react";
import "./ModalPortfolio.css";
import { Link } from "react-router-dom";

const Error404 = () => {
	return (
		<article className="modal" id="work-1">
			<div className="modal-content">
				<Link to="/" className="modal-close">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
					</svg>
				</Link>
				<article className="portfolio-modal">
					<div className="portfolio-info">
						<h2>ERROR 404</h2>
						<h3>Not Found</h3>
					</div>
				</article>
			</div>
		</article>
	);
};

export default Error404;
