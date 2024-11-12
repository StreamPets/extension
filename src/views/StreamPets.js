import useTab from 'hooks/useTab';
import Wardrobe from 'views/Wardrobe';
import Menu from 'components/Menu';
import Store from 'views/Store';
import useColors from 'hooks/useColors';
import { useEffect, useState } from 'react';
import { getStoreColors } from 'api';

const StreamPets = ({ currentColor, availableColors, addAvailableColor, authToken }) => {
  const { selColor, setSelColor, saveColor, cancelColor } = useColors(currentColor, authToken);
  const { tab, openWardrobe, openStore } = useTab();

  const [storeColors, setStoreColors] = useState([]);

  useEffect(() => {
    const fetchStoreColors = async () => {
      const colors = await getStoreColors();
      setStoreColors(colors);
    };
    
    fetchStoreColors();
  }, [setStoreColors]);

  return (
    <>
      <Menu openWardrobe={openWardrobe} openStore={openStore} />
      {tab === "wardrobe" &&
        <Wardrobe
          selColor={selColor}
          setSelColor={setSelColor}
          saveColor={saveColor}
          cancelColor={cancelColor}
          availableColors={availableColors}
        />
      }
      {tab === "store" &&
        <Store
          onBuy={addAvailableColor}
          colors={storeColors}
          disabledColors={availableColors}
        />
      }
    </>
  );
};

export default StreamPets;