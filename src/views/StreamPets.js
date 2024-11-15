import useTab from 'hooks/useTab';
import Wardrobe from 'views/Wardrobe';
import Menu from 'components/Menu';
import Store from 'views/Store';
import useUserData from 'hooks/useUserData';
import useStoreItems from 'hooks/useStoreItems';

const StreamPets = () => {
  const { tab, openWardrobe, openStore } = useTab();
  const { currentColor, setCurrentColor, ownedColors, addOwnedColor } = useUserData();
  const { items } = useStoreItems();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '100%',
        alignItems: 'center',
      }}
    >
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