import React from "react";
import ServiceCard from "./ServiceCard";
import { serviceCardList, serviceSectionTitle } from "../data/dataInfo";

const Services = () => {
	return (
		<section id="services" className="services section bg-gray-light-color">
			<div className="my-container lg:w-full lg:min-h-screen">
				<h2 className="section-title">{serviceSectionTitle}</h2>
				{serviceCardList.map((el, index) => (
					<ServiceCard children={el} key={index} />
				))}
			</div>
		</section>
	);
};

export default Services;
