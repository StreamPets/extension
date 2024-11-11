import axios from "axios";
import { useState } from "react";

const useColors = (initialColor, authToken) => {
  const [currColor, setCurrColor] = useState(initialColor);
  const [selColor, setSelColor] = useState(initialColor);

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  const setColor = async (color) => {
    await api.put('/colors', { color_id: color.id }, {
      headers: { 'x-extension-jwt': authToken }
    });
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