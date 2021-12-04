import React, { useState } from "react";
import Carousel from "./Carousel";
import Slides2D from "./Slides2D";
import customer1 from "../assets/customer-1.jpg";
import customer2 from "../assets/customer-2.jpg";
import customer3 from "../assets/customer-3.jpg";
import customer4 from "../assets/customer-4.jpg";

const ResponsiveCarousel2D3D = ({ slides }) => {
	const [vpWidth, setVpWidth] = useState(window.innerWidth);

	window.addEventListener("resize", () => {
		setVpWidth(window.innerWidth);
	});

	return (
		<>
			{vpWidth > 1024 ? <Carousel data={slides} /> : <Slides2D data={slides} />}
		</>
	);
};

export default ResponsiveCarousel2D3D;
