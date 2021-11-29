import React, { useRef, useState } from "react";
import "./Slides2D.css";

const Slides2D = () => {
	const slides2dRef = useRef(null);

	const moveSlides = (e) => {
		slides2dRef.current.scrollLeft =
			slides2dRef.current.clientWidth * e.target.value;
		console.log(slides2dRef.current.scrollLeft);
		console.log(slides2dRef.current.clientWidth);
	};

	return (
		<article className="carousel2d" ref={slides2dRef}>
			<input
				type="radio"
				name="slides"
				id="slide-1"
				value={0}
				onChange={moveSlides}
				defaultChecked
			/>
			<input
				type="radio"
				name="slides"
				id="slide-2"
				value={1}
				onChange={moveSlides}
			/>
			<input
				type="radio"
				name="slides"
				id="slide-3"
				value={2}
				onChange={moveSlides}
			/>
			<input
				type="radio"
				name="slides"
				id="slide-4"
				value={3}
				onChange={moveSlides}
			/>
			<ul className="slides2d">
				<li className="slide2d">
					<img className="avatar" src="assets/customer-1.jpg" alt="Cliente 1" />
					<blockquote>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
						vel facere, facilis iusto dolor molestias suscipit tempora animi
						exercitationem voluptas dolores doloremque consequuntur velit eum,
						vitae eveniet vero labore cupiditate.
					</blockquote>
					<h3 className="text-first-color">Shirley Torres</h3>
					<h6>Managing Director</h6>
				</li>
				<li className="slide2d">
					<img className="avatar" src="assets/customer-2.jpg" alt="Cliente 2" />
					<blockquote>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
						vel facere, facilis iusto dolor molestias suscipit tempora animi
						exercitationem voluptas dolores doloremque consequuntur velit eum,
						vitae eveniet vero labore cupiditate.
					</blockquote>
					<h3 className="text-first-color">Robert C. Martin</h3>
					<h6>Team Leader</h6>
				</li>
				<li className="slide2d">
					<img className="avatar" src="assets/customer-3.jpg" alt="Cliente 3" />
					<blockquote>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
						vel facere, facilis iusto dolor molestias suscipit tempora animi
						exercitationem voluptas dolores doloremque consequuntur velit eum,
						vitae eveniet vero labore cupiditate.
					</blockquote>
					<h3 className="text-first-color">Margaret Thatcher</h3>
					<h6>Purchase Director</h6>
				</li>
				<li className="slide2d">
					<img className="avatar" src="assets/customer-4.jpg" alt="Cliente 4" />
					<blockquote>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
						vel facere, facilis iusto dolor molestias suscipit tempora animi
						exercitationem voluptas dolores doloremque consequuntur velit eum,
						vitae eveniet vero labore cupiditate.
					</blockquote>
					<h3 className="text-first-color">Derek Lawrence</h3>
					<h6>Managing Director</h6>
				</li>
			</ul>
			<aside className="slides-nav2d">
				<label for="slide-1" id="dot-1"></label>
				<label for="slide-2" id="dot-2"></label>
				<label for="slide-3" id="dot-3"></label>
				<label for="slide-4" id="dot-4"></label>
			</aside>
		</article>
	);
};

export default Slides2D;
