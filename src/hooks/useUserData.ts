import { useCallback, useContext, useEffect, useState } from "react";
import { getUserData } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import type Item from "../types/Item";

const useUserData = () => {
	const { token } = useContext(AuthContext);

	const [currentItem, setCurrentItem] = useState<Item | null>(null);
	const [ownedItems, setOwnedItems] = useState<Item[]>([]);

	useEffect(() => {
		if (!token || currentItem) {
			return;
		}

		const fetchUserData = async () => {
			const { selected, owned } = await getUserData(token);
			setCurrentItem(selected);
			setOwnedItems(owned);
		};

		fetchUserData();
	}, [token, currentItem]);

	const updateCurrentItem = (item: Item) => {
		return setCurrentItem(item);
	};

	const addOwnedItem = useCallback((item: Item) => {
		setOwnedItems((prev) => {
			if (!prev.find((owned) => owned.id === item.id)) {
				return [...prev, item];
			}
			return prev;
		});
	}, []);

	return { currentItem, updateCurrentItem, ownedItems, addOwnedItem };
};

export default useUserData;
