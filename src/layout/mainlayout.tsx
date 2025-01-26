import { Routes, Route } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

import Home from "@/pages/home/home";
import About from "@/pages/about/about";
import Portfolio from "@/pages/Portfolio/portfolio";
import Contact from "@/pages/contact/contact";

const Mainlayout = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
};
export default Mainlayout;
