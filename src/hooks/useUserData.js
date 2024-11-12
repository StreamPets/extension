import { getUserData } from 'api';
import { useCallback, useEffect, useState } from 'react';

const useUserData = () => {
  const [currentColor, setCurrentColor] = useState(null);
  const [availableColors, setAvailableColors] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const fetchUserData = async (auth) => {
      const userData = await getUserData(auth.token);
      setCurrentColor(userData.colors.current);
      if (!availableColors) {
        setAvailableColors(userData.colors.available);
      }
    };

    window.Twitch.ext.onAuthorized((auth) => {
      if (window.Twitch.ext.viewer.isLinked) {
        fetchUserData(auth);
        setAuthToken(auth.token);
      }
    });

    window.Twitch.ext.actions.requestIdShare();
  }, [availableColors, setAvailableColors, setAuthToken, setCurrentColor]);

  const addAvailableColor = useCallback((color) => {
    setAvailableColors(prev => {
      if (!prev.find(available => available.id === color.id)) {
        return [...prev, color];
      }
      return prev;
    });
  }, []);

  return { currentColor, availableColors, addAvailableColor, authToken };
}

export default useUserData;