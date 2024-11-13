import TRex from "components/TRex";
import ColorSelection from "./ColorSelection";
import Button from "components/Button";
import useSelectColor from "hooks/useSelectColor";

const Wardrobe = ({ currentColor, setCurrentColor, ownedColors }) => {
  const { selectedColor, setSelectedColor, cancelColor, saveColor } = useSelectColor(currentColor, setCurrentColor);

  return (
    <>
      <div style={{ display: 'flex' }}>
        {selectedColor && <TRex color={selectedColor} />}
        <ColorSelection colors={ownedColors} setColor={setSelectedColor} />
      </div>
      <div style={{ display: 'flex' }}>
        <Button onClick={cancelColor}>Cancel</Button>
        <Button onClick={saveColor}>Save</Button>
      </div>
    </>
  );
}

export default Wardrobe;