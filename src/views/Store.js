import Item from "components/Item";
import useBuyItem from "hooks/useBuyItem";
import useStoreItems from "hooks/useStoreItems";

const Store = ({ addOwnedColor, ownedColors }) => {
  const { items } = useStoreItems();
  const { onClickBuy } = useBuyItem(addOwnedColor);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {items.map(color =>
        <Item
          key={color.id}
          color={color}
          clickable={!ownedColors.some(ownedColor => ownedColor.id === color.id)}
          onClickBuy={onClickBuy}
        />
      )}
    </div>
  );
}

export default Store;