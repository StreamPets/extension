import { useEffect } from "react";
import ColorSelection from "./ColorSelection";
import WardrobePreview from "./WardrobePreview";

const Wardrobe = ({ selColor, setSelColor, saveColor, cancelColor, availableColors }) => {
  useEffect(() => {
    return () => {
      cancelColor();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <WardrobePreview selColor={selColor} cancelColor={cancelColor} saveColor={saveColor} />
      <ColorSelection colors={availableColors} setSelColor={setSelColor} />
    </div>
  );
}

export default Wardrobe;