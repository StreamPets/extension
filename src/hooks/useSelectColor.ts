import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { putColor } from "../api";
import Color from "../types/Color";

const useSelectColor = (currentColor: Color | null, updateCurrentColor: (color: Color) => void) => {
	const { token } = useContext(AuthContext);
	const [selectedColor, setSelectedColor] = useState(currentColor);

	const saveColor = () => {
		if (!token || !selectedColor) {
			return;
		}

		updateCurrentColor(selectedColor);
		putColor(selectedColor.id, token);
	};

	const cancelColor = () => {
		setSelectedColor(currentColor);
	};

	useEffect(() => {
		setSelectedColor(currentColor);
	}, [currentColor]);

	return { selectedColor, setSelectedColor, saveColor, cancelColor };
};

export default useSelectColor;
