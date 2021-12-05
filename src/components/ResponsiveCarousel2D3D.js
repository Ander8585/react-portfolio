import React, { useState } from "react";
import Carousel from "./Carousel";
import Slides2D from "./Slides2D";

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
