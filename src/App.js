import PortfolioHeader from "./components/PortfolioHeader";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

function App() {
	const [actionCloseMenu, setActionCloseMenu] = useState(false);

	return (
		<div onClick={(e) => setActionCloseMenu(!actionCloseMenu)}>
			<PortfolioHeader actionCloseMenu={actionCloseMenu} />
			<Home />
			<About />
			<Services />
			<Portfolio />
			<Testimonials />
		</div>
	);
}

export default App;
