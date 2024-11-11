import Color from "color";

const ColorSwatch = ({ color, setColor }) => {
  const darkerColor = Color(color.hex).darken(0.5).hex();

  return (
    <button style={{
      height: 48,
      width: 48,
      borderWidth: 3,
      borderColor: 'white',
      borderStyle: 'solid',
      borderRadius: '100%',
      background: `linear-gradient(315deg, ${darkerColor} 50%, ${color.hex} 50%)`,
      cursor: 'pointer',
    }}
    onClick={async () => await setColor(color)}
    >
    </button>
  );
}

export default ColorSwatch;