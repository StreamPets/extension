const ColorSelection = ({ colors, setColor }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '100%',
        gap: 8,
      }}
    >
      {colors.map(color =>
        <img
          style={{
            height: 64,
            width: 64,
            cursor: 'pointer',
          }}
          src={color.prev}
          alt="dino preview"
          onClick={() => setColor(color)}
          key={color.id}
        />
      )}
    </div>
  );
}

export default ColorSelection;