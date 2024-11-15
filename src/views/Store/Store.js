import Item from "components/Item";
import useBuyItem from "hooks/useBuyItem";

import './Store.css';

const Store = ({ items, addOwnedColor, ownedColors }) => {
  const { onClickBuy } = useBuyItem(addOwnedColor);

  return (
    <div className="store">
      {items.map(color =>
        <Item
          key={color.id}
          prev={color.prev}
          clickable={!ownedColors.some(ownedColor => ownedColor.id === color.id)}
          onClick={() => onClickBuy(color)}
        />
      )}
    </div>
  );
}

export default Store;