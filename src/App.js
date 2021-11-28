import PortfolioHeader from "./components/PortfolioHeader";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
//import Carousel from "./components/Carousel";
import Contacts from './components/Contacts';
import Footer from './components/Footer';


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
      <Contacts />
      <Footer />
		</div>
	);
}

export default App;
