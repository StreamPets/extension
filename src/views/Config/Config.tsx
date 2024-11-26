import { useContext, useEffect, useState } from "react";
import { getOverlayUrl } from "../../api";
import { AuthContext } from "../../contexts/AuthContext";
import "./Config.css";

const Config = () => {
	const { token } = useContext(AuthContext);
	const [overlayUrl, setOverlayUrl] = useState<string | undefined>();

	useEffect(() => {
		if (!token) {
			return;
		}

		const fetchOverlayUrl = async () => {
			const overlayUrl = await getOverlayUrl(token);
			setOverlayUrl(overlayUrl);
		};

		fetchOverlayUrl();
	}, [token]);

	return (
		<div className="container">
			<div className="overlay-url">{overlayUrl}</div>
			<button
				className="launch-button"
				type="button"
				onClick={() => window.open(overlayUrl, "_blank")}
			>
				Launch
			</button>
		</div>
	);
};

export default Config;
