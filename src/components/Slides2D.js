import React, { useRef, useState } from "react";
import "./Slides2D.css";

const Slides2D = ({ data = [] }) => {
	const carousel2dRef = useRef(null);
	const [radioSelected, setRadioSelected] = useState(0);

	const moveSlides = (e) => {
		carousel2dRef.current.scrollLeft =
			carousel2dRef.current.clientWidth * e.target.value;
		//setRadioSelected(e.target.value);
	};

	const carouselScroll = (e) => {
		for (let index = 0; index < data.length; index++) {
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
			{data.map((el, index) => (
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
			<ul className="slides2d" style={{ "--length": data.length }}>
				{data.map((el, index) => (
					<li className="slide2d" key={index}>
						<img className="avatar" src={el.image} alt={el.title} />
						<blockquote>{el.description}</blockquote>
						<h3 className="text-first-color">{el.title}</h3>
						<h6>{el.subtitle}</h6>
					</li>
				))}
			</ul>
			<aside className="slides-nav2d">
				{data.map((el, index) => (
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
