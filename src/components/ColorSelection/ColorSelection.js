import './ColorSelection.css';

const ColorSelection = ({ colors, setColor }) => {
  return (
    <div className="color-selection">
      {colors.map(color =>
        <img
          className="color-icon"
          key={color.id}
          src={color.prev}
          alt="dino preview"
          onClick={() => setColor(color)}
        />
      )}
    </div>
  );
}

export default ColorSelection;