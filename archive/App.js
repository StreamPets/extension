import { AuthProvider } from "contexts/AuthContext";
import StreamPets from "views/StreamPets";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Config from "views/Config";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AuthProvider>
					<Router>
						<Routes>
							<Route path="/panel" element={<StreamPets />} />
							<Route path="/config" element={<Config />} />
						</Routes>
					</Router>
				</AuthProvider>
			</header>
		</div>
	);
}

export default App;
