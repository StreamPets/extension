import useTab from 'hooks/useTab';
import Wardrobe from 'views/Wardrobe';
import Menu from 'components/Menu';
import Store from 'views/Store';
import useUserData from 'hooks/useUserData';

const StreamPets = () => {
  const { tab, openWardrobe, openStore } = useTab();
  const { currentColor, setCurrentColor, ownedColors, addOwnedColor } = useUserData();

  return (
    <>
      <Menu openWardrobe={openWardrobe} openStore={openStore} />
      {tab === "wardrobe" &&
        <Wardrobe
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          ownedColors={ownedColors}
        />
      }
      {tab === "store" &&
        <Store
          addOwnedColor={addOwnedColor}
          ownedColors={ownedColors}
        />
      }
    </>
  );
};

export default StreamPets;