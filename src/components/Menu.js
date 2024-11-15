import MenuButton from "./MenuButton";
import { FaShirt } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Menu = ({ openTab, openWardrobe, openStore }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: 100,
        width: '100%',
        backgroundColor: '#33333a',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <MenuButton
        text='Wardrobe'
        onClick={openWardrobe}
        isOpen={openTab === 'wardrobe'}
        children={<FaShirt size={48} style={{ marginRight: 1 }} />}
      />
      <MenuButton
        text='Store'
        onClick={openStore}
        isOpen={openTab === 'store'}
        children={<FaShoppingCart size={48} style={{ marginRight: 6 }} />}
      />
    </div>
  );
}

export default Menu;