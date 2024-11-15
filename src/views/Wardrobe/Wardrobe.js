import TRex from "components/TRex";
import ColorSelection from "components/ColorSelection";
import Button from "components/Button";
import useSelectColor from "hooks/useSelectColor";

import "./Wardrobe.css";

const Wardrobe = ({ currentColor, setCurrentColor, ownedColors }) => {
  const { selectedColor, setSelectedColor, cancelColor, saveColor } = useSelectColor(currentColor, setCurrentColor);

  return (
    <>
      <div className="wardrobe">
        {selectedColor && <TRex color={selectedColor}/>}
        <div className="button-box">
          <Button text="Cancel" className="wardrobe-button cancel-button" onClick={cancelColor}/>
          <Button text="Save" className="wardrobe-button save-button" onClick={saveColor}/>
        </div>
      </div>
      <ColorSelection colors={ownedColors} setColor={setSelectedColor}/>
    </>
  );
}

export default Wardrobe;