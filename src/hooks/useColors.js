import axios from "axios";
import { useEffect, useState } from "react";

const useColors = (initialColor) => {
  const [colors, setColors] = useState([]);
  const [currColor, setCurrColor] = useState(initialColor);
  const [selColor, setSelColor] = useState(initialColor);

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  const setColor = async (color) => {
    await api.put('/colors', { color: color });
  };

  const saveColor = () => {
    setColor(selColor);
    setCurrColor(selColor);
  }

  const cancelColor = () => {
    setSelColor(currColor);
  }

  useEffect(() => {
    const fetchColors = async () => {
      const { data: colors } = await api.get('/colors');
      setColors(colors);
    };

    fetchColors();
    // eslint-disable-next-line
  }, []);

  return { colors, selColor, setSelColor, saveColor, cancelColor };
}

export default useColors;