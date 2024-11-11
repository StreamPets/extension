import useTab from 'hooks/useTab';
import Wardrobe from 'views/Wardrobe';
import Menu from 'components/Menu';
import Store from 'views/Store';
import axios from 'axios';
import useColors from 'hooks/useColors';
import { useEffect, useState } from 'react';

const StreamPets = ({ userData, authToken }) => {

  const { selColor, setSelColor, saveColor, cancelColor } = useColors(userData.colors.current, authToken);
  const { tab, openWardrobe, openStore } = useTab();
  const [storeColors, setStoreColors] = useState([]);

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  useEffect(() => {
    const fetchStoreColors = async () => {
      const { data: { colors } } = await api.get('/store');
      setStoreColors(colors);
    };
    
    fetchStoreColors();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Menu openWardrobe={openWardrobe} openStore={openStore} />
      {tab === "wardrobe" &&
        <Wardrobe
          selColor={selColor}
          setSelColor={setSelColor}
          saveColor={saveColor}
          cancelColor={cancelColor}
          availableColors={userData.colors.available}
        />
      }
      {tab === "store" &&
        <Store colors={storeColors} />
      }
    </>
  );
};

export default StreamPets;