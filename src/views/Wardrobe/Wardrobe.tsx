import Button from "../../components/Button";
import ColorSelection from "../../components/ColorSelection";
import TRex from "../../components/TRex";
import useSelectColor from "../../hooks/useSelectColor";
import Color from "../../types/Color";
import "./Wardrobe.css";

interface WardrobeProps {
	currentColor: Color | null,
	updateCurrentColor: (color: Color) => void,
	ownedColors: Color[],
}

const Wardrobe = ({ currentColor, updateCurrentColor, ownedColors }: WardrobeProps) => {
	const { selectedColor, setSelectedColor, cancelColor, saveColor } =
		useSelectColor(currentColor, updateCurrentColor);

	return (
		<>
			<div className="wardrobe">
				{selectedColor && <TRex color={selectedColor} />}
				<div className="button-box">
					<Button
						icon={null}
						text="Cancel"
						className="wardrobe-button cancel-button"
						onClick={cancelColor}
					/>
					<Button
						icon={null}
						text="Save"
						className="wardrobe-button save-button"
						onClick={saveColor}
					/>
				</div>
			</div>
			<ColorSelection colors={ownedColors} setColor={setSelectedColor} />
		</>
	);
};

export default Wardrobe;
