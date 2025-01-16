import { useContext, useEffect, useState } from "react";
import { putItem } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import type Item from "../types/Item";

const useSelectItem = (currentItem: Item | null, updateCurrentItem: (item: Item) => void) => {
	const { token } = useContext(AuthContext);
	const [selectedItem, setSelectedItem] = useState(currentItem);

	const saveItem = () => {
		if (!token || !selectedItem) {
			return;
		}

		updateCurrentItem(selectedItem);
		putItem(selectedItem.id, token);
	};

	const cancelItem = () => {
		setSelectedItem(currentItem);
	};

	useEffect(() => {
		setSelectedItem(currentItem);
	}, [currentItem]);

	return { selectedItem, setSelectedItem, saveItem, cancelItem };
};

export default useSelectItem;
