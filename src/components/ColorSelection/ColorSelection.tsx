import Color from "../../types/Color";
import SetState from "../../types/SetState";
import "./ColorSelection.css";

interface ColorSelectionProps {
	colors: Color[],
	setColor: SetState<Color | null>,
}

const ColorSelection = ({ colors, setColor }: ColorSelectionProps) => {
	return (
		<div className="color-selection">
			{colors.map((color) => (
				<img
					className="color-icon"
					key={color.id}
					src={color.prev}
					alt="dino preview"
					onClick={() => setColor(color)}
				/>
			))}
		</div>
	);
};

export default ColorSelection;
