import Wardrobe from 'views/Wardrobe';
import Menu from 'components/Menu';
import Store from 'views/Store';
import useUserData from 'hooks/useUserData';
import useStoreItems from 'hooks/useStoreItems';

import './StreamPets.css';
import { useCallback, useState } from 'react';

const StreamPets = () => {
  const { currentColor, setCurrentColor, ownedColors, addOwnedColor } = useUserData();
  const { items } = useStoreItems();

  const [tab, setTab] = useState('wardrobe');

  const openWardrobe = useCallback(() => {
    setTab('wardrobe');
  }, [setTab]);

  const openStore = useCallback(() => {
    setTab('store');
  }, [setTab]);

  return (
    <div className='stream-pets'>
      <Menu openTab={tab} openWardrobe={openWardrobe} openStore={openStore} />
      {tab === "wardrobe" &&
        <Wardrobe
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          ownedColors={ownedColors}
        />
      }
      {tab === "store" &&
        <Store
          items={items}
          addOwnedColor={addOwnedColor}
          ownedColors={ownedColors}
        />
      }
    </div>
  );
};

export default StreamPets;