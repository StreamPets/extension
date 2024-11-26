import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getUserData } from "../api";
import Color from "../types/Color";

const useUserData = () => {
	const { token } = useContext(AuthContext);

	const [currentColor, setCurrentColor] = useState<Color | null>(null);
	const [ownedColors, setOwnedColors] = useState<Color[]>([]);

	useEffect(() => {
		if (!token || currentColor) {
			return;
		}

		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setCurrentColor(userData.colors.current);
			setOwnedColors(userData.colors.available);
		};

		fetchUserData();
	}, [token, currentColor]);

	const updateCurrentColor = (color: Color) => {
		return setCurrentColor(color);
	}

	const addOwnedColor = useCallback((color: Color) => {
		setOwnedColors((prev) => {
			if (!prev.find((owned) => owned.id === color.id)) {
				return [...prev, color];
			}
			return prev;
		});
	}, [setOwnedColors]);

	return { currentColor, updateCurrentColor, ownedColors, addOwnedColor };
};

export default useUserData;
