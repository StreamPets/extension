import Item from "components/Item";
import useBuyItem from "hooks/useBuyItem";

const Store = ({ items, addOwnedColor, ownedColors }) => {
  const { onClickBuy } = useBuyItem(addOwnedColor);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingTop: 18,
      }}
    >
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