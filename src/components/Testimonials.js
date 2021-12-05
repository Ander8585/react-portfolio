import React from "react";
import HeroImage from "./HeroImage";
import customer5 from "../assets/customer-5.jpg";
import customer6 from "../assets/customer-6.jpg";
import customer7 from "../assets/customer-7.jpg";

import ResponsiveCarousel2D3D from "./ResponsiveCarousel2D3D";

const slides = [
	/* 	{
		title: "Shirley Torres",
		subtitle: "Managing Director",
		description: "HOLAAAAAA",
		image: customer1,
	},
	{
		title: "Robert C. Martin",
		subtitle: "Team Leader",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nam at eius consequuntur nihil dolore laboriosam consequatur, blanditiis tempore, sunt rem. Laudantium, delectus at nihil iste praesentium quos id quidem!",
		image: customer2,
	}, */
	{
		title: "Yanquiel Jauregui",
		subtitle: "Jefe de Mantenimiento (Industria Eleka)",
		description:
			"Es una persona muy inteligente y trabajar con él ha sido muy importante para nuestra planta. Es muy capaz y tiene muy buen trato con todo el personal de la empresa.",
		image: customer6,
	},
	{
		title: "Raudel Cuiman",
		subtitle: "Profesor e Investigador (Universidad CUJAE)",
		description:
			"Es un excelente profesional y un gran compañero de equipo. Propone siempre ideas interesantes y aprende rápidamente.",
		image: customer5,
	},
	{
		title: "Derek Lawrence",
		subtitle: "Managing Director (Insepra Ltd.)",
		description:
			"Es un gran trabajador. Un ingeniero muy creativo y eficiente en buscar soluciones a los problemas más retadores. Tenerlo como trabajador marca la diferencia",
		image: customer7,
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
				<h2 className="section-title">Testimonios</h2>
				<ResponsiveCarousel2D3D slides={slides} />
			</HeroImage>
		</section>
	);
};

export default Testimonials;
