import React from "react";
import HeroImage from "./HeroImage";
import customer1 from "../assets/customer-1.jpg";
import customer2 from "../assets/customer-2.jpg";
import customer3 from "../assets/customer-3.jpg";
import customer4 from "../assets/customer-4.jpg";
import ResponsiveCarousel2D3D from "./ResponsiveCarousel2D3D";

const slides = [
	{
		title: "Shirley Torres",
		subtitle: "Managing Director",
		description: "Lorem",
		image: customer1,
	},
	{
		title: "Robert C. Martin",
		subtitle: "Team Leader",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nam at eius consequuntur nihil dolore laboriosam consequatur, blanditiis tempore, sunt rem. Laudantium, delectus at nihil iste praesentium quos id quidem!",
		image: customer2,
	},
	{
		title: "Margaret Thatcher",
		subtitle: "Purchase Director",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nam at eius consequuntur nihil dolore laboriosam consequatur, blanditiis tempore, sunt rem. Laudantium, delectus at nihil iste praesentium quos id quidem!",
		image: customer3,
	},
	{
		title: "Derek Lawrence",
		subtitle: "Managing Director",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nam at eius consequuntur nihil dolore laboriosam consequatur, blanditiis tempore, sunt rem. Laudantium, delectus at nihil iste praesentium quos id quidem!",
		image: customer4,
	},
	{
		title: "Derek Lawrence",
		subtitle: "Managing Director",
		description: "YESSSSS!",
		image: customer4,
	},
	/* {
		title: "Five",
		subtitle: "Australia",
		description: "A piece of heaven",
		image:
			"https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
	}, */
];

const Testimonials = () => {
	return (
		<section id="testimonials" className="testimonials">
			<HeroImage type="hero-image-testimonials">
				<h2 className="section-title">Mis Clientes dicen</h2>
				<ResponsiveCarousel2D3D slides={slides} />
			</HeroImage>
		</section>
	);
};

export default Testimonials;
