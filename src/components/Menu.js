import MenuButton from "./MenuButton";

const Menu = ({ openTab, openWardrobe, openStore }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: 100,
        width: '100%',
        // TODO: Get a better background color
        backgroundColor: '#33375c',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <MenuButton
        text='Wardrobe'
        onClick={openWardrobe}
        isOpen={openTab === 'wardrobe'}
      />
      <MenuButton
        text='Store'
        onClick={openStore}
        isOpen={openTab === 'store'}
      />
    </div>
  );
}

export default Menu;