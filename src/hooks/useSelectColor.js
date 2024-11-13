import { putColor } from "api";
import { AuthContext } from "contexts/AuthContext";
import { useContext, useEffect, useState } from "react";

const useSelectColor = (currentColor, setCurrentColor) => {
  const { token } = useContext(AuthContext);

  const [selectedColor, setSelectedColor] = useState(currentColor);

  const saveColor = () => {
    setCurrentColor(selectedColor);
    putColor(selectedColor.id, token);
  };

  const cancelColor = () => {
    setSelectedColor(currentColor);
  };

  useEffect(() => {
    setSelectedColor(currentColor);
  }, [currentColor]);

  return { selectedColor, setSelectedColor, saveColor, cancelColor };
}

export default useSelectColor;