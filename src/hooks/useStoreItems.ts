import { useContext, useEffect, useState } from "react";
import { getStoreItems } from "../api";
import { AuthContext } from "../contexts/AuthContext";

const useStoreItems = () => {
	const { token } = useContext(AuthContext);
	const [items, setItems] = useState([]);

	useEffect(() => {
		if (!token) {
			return;
		}

		const fetchItems = async () => {
			await window.Twitch.ext.bits.getProducts();
			const items = await getStoreItems(token);
			setItems(items);
		};

		fetchItems();
	}, [token]);

	return { items };
};

export default useStoreItems;
