import React from "react";
import HeroImage from "./HeroImage";

const Testimonials = () => {
	return (
		<section id="testimonials" className="testimonials">
			<HeroImage type="hero-image-testimonials"></HeroImage>
		</section>
	);
};

/* <div className="hero-image-content">
						<div className="container">
							<h2 className="section-title">Mis Clientes dicen</h2>
							<article
								className="carousel"
								style={{ "--carousel-bg-color": "var(--white-alpha-color)" }}
							>
								<input type="radio" name="slides" id="slide-1" checked />
								<input type="radio" name="slides" id="slide-2" />
								<input type="radio" name="slides" id="slide-3" />
								<input type="radio" name="slides" id="slide-4" />
								<ul className="slides">
									<li className="slide">
										<img
											className="avatar"
											src="assets/customer-1.jpg"
											alt="Cliente 1"
										/>
										<blockquote>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Veniam, vel facere, facilis iusto dolor molestias suscipit
											tempora animi exercitationem voluptas dolores doloremque
											consequuntur velit eum, vitae eveniet vero labore
											cupiditate.
										</blockquote>
										<h3 className="text-first-color">Shirley Torres</h3>
										<h6>Managing Director</h6>
									</li>
									<li className="slide">
										<img
											className="avatar"
											src="assets/customer-2.jpg"
											alt="Cliente 2"
										/>
										<blockquote>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Veniam, vel facere, facilis iusto dolor molestias suscipit
											tempora animi exercitationem voluptas dolores doloremque
											consequuntur velit eum, vitae eveniet vero labore
											cupiditate.
										</blockquote>
										<h3 className="text-first-color">Robert C. Martin</h3>
										<h6>Team Leader</h6>
									</li>
									<li className="slide">
										<img
											className="avatar"
											src="assets/customer-3.jpg"
											alt="Cliente 3"
										/>
										<blockquote>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Veniam, vel facere, facilis iusto dolor molestias suscipit
											tempora animi exercitationem voluptas dolores doloremque
											consequuntur velit eum, vitae eveniet vero labore
											cupiditate.
										</blockquote>
										<h3 className="text-first-color">Margaret Thatcher</h3>
										<h6>Purchase Director</h6>
									</li>
									<li className="slide">
										<img
											className="avatar"
											src="assets/customer-4.jpg"
											alt="Cliente 4"
										/>
										<blockquote>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Veniam, vel facere, facilis iusto dolor molestias suscipit
											tempora animi exercitationem voluptas dolores doloremque
											consequuntur velit eum, vitae eveniet vero labore
											cupiditate.
										</blockquote>
										<h3 className="text-first-color">Derek Lawrence</h3>
										<h6>Managing Director</h6>
									</li>
								</ul>
								<aside className="slides-nav">
									<label for="slide-1" id="dot-1"></label>
									<label for="slide-2" id="dot-2"></label>
									<label for="slide-3" id="dot-3"></label>
									<label for="slide-4" id="dot-4"></label>
								</aside>
							</article>
						</div>
					</div> */

export default Testimonials;
