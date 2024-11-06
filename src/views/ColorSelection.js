import ColorSwatch from "components/ColorSwatch";

const ColorSelection = ({ colors, setSelColor }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {colors.map(color => <ColorSwatch key={color} color={color} setColor={() => setSelColor(color)} />)}
    </div>
  );
}

export default ColorSelection;