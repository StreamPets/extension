import { putColor } from "api";
import { useState } from "react";

const useColors = (initialColor, authToken) => {
  const [currColor, setCurrColor] = useState(initialColor);
  const [selColor, setSelColor] = useState(initialColor);

  const setColor = async (color) => {
    console.log(color);
    putColor(color.id, authToken);
  };

  const saveColor = () => {
    setColor(selColor);
    setCurrColor(selColor);
  };

  const cancelColor = () => {
    setSelColor(currColor);
  };

  return { selColor, setSelColor, saveColor, cancelColor };
};

export default useColors;