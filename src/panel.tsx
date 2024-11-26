import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import StreamPets from "./views/StreamPets/StreamPets.tsx";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion:
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider>
			<StreamPets />
		</AuthProvider>
	</StrictMode>,
);
