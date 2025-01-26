import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Mainlayout from "./layout/mainlayout";
//css 파일 불러오기
import "./styles/App.css";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route>
					<Mainlayout />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
