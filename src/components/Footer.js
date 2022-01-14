import React from "react";
import "./Footer.css";
import Logo from "./Logo";
import { logoSvg } from "../data/dataInfo";

const Footer = () => {
	return (
		<footer className="footer">
			<small>
				Sitio diseñado por Ander
				<Logo logoSvg={logoSvg} customizedWidth="40" customizedHeight="30" />
			</small>
		</footer>
	);
};

export default Footer;
