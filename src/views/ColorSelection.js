import ColorSwatch from "components/ColorSwatch";

const ColorSelection = ({ colors, setColor }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {colors.map(color => <ColorSwatch key={color.id} color={color} setColor={() => setColor(color)} />)}
    </div>
  );
}

export default ColorSelection;