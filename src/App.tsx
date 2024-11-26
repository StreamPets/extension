import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";
import StreamPets from "./views/StreamPets";
import Config from "./views/Config";
import "./App.css";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/panel" element={<StreamPets />} />
					<Route path="/config" element={<Config />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
