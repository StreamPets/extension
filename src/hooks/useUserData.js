import { getUserData } from 'api';
import { AuthContext } from 'contexts/AuthContext';
import { useCallback, useContext, useEffect, useState } from 'react';

const useUserData = () => {
  const { token } = useContext(AuthContext);

  const [currentColor, setCurrentColor] = useState(null);
  const [ownedColors, setOwnedColors] = useState([]);

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

  const addOwnedColor = useCallback((color) => {
    setOwnedColors(prev => {
      if (!prev.find(owned => owned.id === color.id)) {
        return [...prev, color];
      }
      return prev;
    });
  }, [setOwnedColors]);

  return { currentColor, setCurrentColor, ownedColors, addOwnedColor };
}

export default useUserData;