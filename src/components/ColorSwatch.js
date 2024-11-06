import Color from "color";

const ColorSwatch = ({ color, setColor }) => {

  let colorHex = color;
  if (color === 'black') {
    colorHex = '#333';
  }

  const darkerColor = Color(color).darken(0.5).hex();

  return (
    <button style={{
      height: 48,
      width: 48,
      borderWidth: 3,
      borderColor: 'white',
      borderStyle: 'solid',
      borderRadius: '100%',
      background: `linear-gradient(315deg, ${darkerColor} 50%, ${colorHex} 50%)`,
      cursor: 'pointer',
    }}
    onClick={async () => await setColor(color)}
    >
    </button>
  );
}

export default ColorSwatch;