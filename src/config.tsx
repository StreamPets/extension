import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Config from "./views/Config/Config.tsx";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion:
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Config />
	</StrictMode>,
);
