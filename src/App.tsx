import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Mainlayout from "./layout/mainlayout";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/*' element={<Mainlayout />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
