import React /* , { useState, useEffect } */ from "react";
import "./Carousel.scss";
import customer1 from "../assets/customer-1.jpg";
import customer2 from "../assets/customer-2.jpg";
import customer3 from "../assets/customer-3.jpg";
import customer4 from "../assets/customer-4.jpg";

const slides = [
	{
		title: "Shirley Torres",
		subtitle: "Managing Director",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nam at eius consequuntur nihil dolore laboriosam consequatur, blanditiis tempore, sunt rem. Laudantium, delectus at nihil iste praesentium quos id quidem!",
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

function useTilt(active) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!ref.current || !active) {
			return;
		}

		const state = {
			rect: undefined,
			mouseX: undefined,
			mouseY: undefined,
		};

		let el = ref.current;

		const handleMouseMove = (e) => {
			if (!el) {
				return;
			}
			if (!state.rect) {
				state.rect = el.getBoundingClientRect();
			}
			state.mouseX = e.clientX;
			state.mouseY = e.clientY;
			const px = (state.mouseX - state.rect.left) / state.rect.width;
			const py = (state.mouseY - state.rect.top) / state.rect.height;

			el.style.setProperty("--px", px);
			el.style.setProperty("--py", py);
		};

		el.addEventListener("mousemove", handleMouseMove);

		return () => {
			el.removeEventListener("mousemove", handleMouseMove);
		};
	}, [active]);

	return ref;
}

const initialState = {
	slideIndex: 0,
};

const slidesReducer = (state, event) => {
	if (event.type === "NEXT") {
		return {
			...state,
			slideIndex: (state.slideIndex + 1) % slides.length,
		};
	}
	if (event.type === "PREV") {
		return {
			...state,
			slideIndex:
				state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
		};
	}
};

function Slide({ slide, offset }) {
	const active = offset === 0 ? true : null;
	const ref = useTilt(active);

	return (
		<div
			ref={ref}
			className="slide"
			data-active={active}
			style={{
				"--offset": offset,
				"--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
			}}
		>
			<div
				className="slideBackground"
				/* style={{
					backgroundImage: `url('${slide.image}')`,
				}} */
			/>
			<div
				className="slideContent"
				/* style={{
					backgroundImage: `url('${slide.image}')`,
				}} */
			>
				<div
					className="slideImg"
					style={{
						backgroundImage: `url('${slide.image}')`,
					}}
				/>
				<div className="slideContentInner">
					<blockquote className="slideDescription">
						{slide.description}
					</blockquote>
					<h2 className="slideTitle">{slide.title}</h2>
					<h6 className="slideSubtitle">{slide.subtitle}</h6>
				</div>
			</div>
		</div>
	);
}

const Carousel = () => {
	const [state, dispatch] = React.useReducer(slidesReducer, initialState);
	//const [VportWidth, setVportWidth] = useState(window.innerWidth);

	/* window.addEventListener("resize", (e) => {
		setVportWidth(window.innerWidth);
	}); */

	/* 	window.addEventListener("mousemove") */

	return (
		<div className="slides">
			<button onClick={() => dispatch({ type: "PREV" })}>‹</button>

			{[...slides, ...slides, ...slides].map((slide, i) => {
				let offset = slides.length + (state.slideIndex - i);
				return <Slide slide={slide} offset={offset} key={i} />;
			})}
			<button onClick={() => dispatch({ type: "NEXT" })}>›</button>
		</div>
	);
};

export default Carousel;
