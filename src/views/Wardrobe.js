import TRex from "components/TRex";
import ColorSelection from "./ColorSelection";
import Button from "components/Button";
import useSelectColor from "hooks/useSelectColor";

const Wardrobe = ({ currentColor, setCurrentColor, ownedColors }) => {
  const { selectedColor, setSelectedColor, cancelColor, saveColor } = useSelectColor(currentColor, setCurrentColor);

  return (
    <>
      <div style={{ margin: 12, padding: 8, width: '55%' }}>
        <div
          style={{
            borderWidth: 4,
            borderRadius: 8,
            borderColor: 'white',
            borderStyle: 'solid',
            padding: 8,
            // TODO: Find a better color
            backgroundColor: 'grey',
          }}
        >
          {selectedColor && <TRex color={selectedColor} />}
        </div>
        <div
          style={{
            display: 'flex',
            height: 30,
            gap: 8,
            paddingTop: 8,
          }}
        >
          <Button style={{ width: '50%' }} onClick={cancelColor}>Cancel</Button>
          <Button style={{ width: '50%' }} onClick={saveColor}>Save</Button>
        </div>
      </div>
      <ColorSelection colors={ownedColors} setColor={setSelectedColor} />
    </>
  );
}

export default Wardrobe;