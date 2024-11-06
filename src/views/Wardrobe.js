import ColorSelection from "./ColorSelection";
import WardrobePreview from "./WardrobePreview";
import useColors from "hooks/useColors";

const Wardrobe = ({ userData, authToken }) => {
  const { colors, selColor, setSelColor, saveColor, cancelColor } = useColors(userData.color, authToken);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <WardrobePreview selColor={selColor} cancelColor={cancelColor} saveColor={saveColor} />
      <ColorSelection colors={colors} setSelColor={setSelColor} />
    </div>
  );
}

export default Wardrobe;