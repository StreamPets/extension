import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getOverlayUrl } from "../../api";

const Config = () => {
	const { token } = useContext(AuthContext);
	const [overlayUrl, setOverlayUrl] = useState(null);

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

	return <p>{overlayUrl}</p>;
};

export default Config;
