import React, { useRef, useState } from "react";
import "./Slides2D.css";
import customer1 from "../assets/customer-1.jpg";
import customer2 from "../assets/customer-2.jpg";
import customer3 from "../assets/customer-3.jpg";
import customer4 from "../assets/customer-4.jpg";

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

const Slides2D = () => {
	const carousel2dRef = useRef(null);
	const [radioSelected, setRadioSelected] = useState(0);

	const moveSlides = (e) => {
		carousel2dRef.current.scrollLeft =
			carousel2dRef.current.clientWidth * e.target.value;
		//setRadioSelected(e.target.value);
	};

	const carouselScroll = (e) => {
		for (let index = 0; index < slides.length; index++) {
			if (Math.abs(e.target.scrollLeft - e.target.clientWidth * index) < 5) {
				setRadioSelected(index);
				break;
			}
		}
	};

	return (
		<article
			className="carousel2d"
			ref={carousel2dRef}
			onScroll={carouselScroll}
		>
			{slides.map((el, index) => (
				<input
					type="radio"
					name="slides"
					id={`slide-${index}`}
					value={index}
					key={index}
					onChange={moveSlides}
					checked={radioSelected === index}
				/>
			))}
			<ul className="slides2d" style={{ "--length": slides.length }}>
				{slides.map((el, index) => (
					<li className="slide2d" key={index}>
						<img className="avatar" src={el.image} alt={el.title} />
						<blockquote>{el.description}</blockquote>
						<h3 className="text-first-color">{el.title}</h3>
						<h6>{el.subtitle}</h6>
					</li>
				))}
				{console.log(slides.length)}
			</ul>
			<aside className="slides-nav2d">
				{slides.map((el, index) => (
					<label
						htmlFor={`slide-${index}`}
						key={`dot-${index}`}
						style={{
							backgroundColor:
								radioSelected === index ? `rgba(51, 71, 86, 1)` : "inherit",
						}}
					></label>
				))}
			</aside>
		</article>
	);
};

export default Slides2D;
