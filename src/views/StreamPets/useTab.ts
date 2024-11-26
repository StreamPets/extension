import { useCallback, useState } from "react";

const useTab = () => {
	const [tab, setTab] = useState("wardrobe");

	const openWardrobe = useCallback(() => {
		setTab("wardrobe");
	}, [setTab]);

	const openStore = useCallback(() => {
		setTab("store");
	}, [setTab]);

	return { tab, openWardrobe, openStore };
};

export default useTab;
