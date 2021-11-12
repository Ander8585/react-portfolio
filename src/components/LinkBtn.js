import React from "react";
import "./LinkBtn.css";

const LinkBtn = ({ children, href }) => {
	return (
		<a href={href} className="link-btn">
			{children}
		</a>
	);
};

export default LinkBtn;
