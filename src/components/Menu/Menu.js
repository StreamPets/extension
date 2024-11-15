import MenuButton from "components/MenuButton";
import { FaShirt } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import './Menu.css';

const Menu = ({ openTab, openWardrobe, openStore }) => {
  return (
    <div className='menu'>
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