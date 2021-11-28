import React from "react";
import "./Footer.css";
import Logo from "./Logo";

const Footer = () => {
	return (
		<footer class="footer">
			<small>
				Sitio diseñado por
				<Logo customizedWidth="40" customizedHeight="30" />
			</small>
		</footer>
	);
};

export default Footer;
