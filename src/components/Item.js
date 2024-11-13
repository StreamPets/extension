import TRex from "./TRex";

const Item = ({ color, clickable, onClickBuy }) => {
  return (
    <div
      style={{
        cursor: clickable ? 'pointer' : '',
        filter: clickable ? 'saturate(1)' : 'saturate(0)',
      }}
      onClick={clickable ? () => onClickBuy(color) : () => {}}
    >
      <p>{color.name}</p>
      <TRex color={color} />
    </div>
  );
}

export default Item;