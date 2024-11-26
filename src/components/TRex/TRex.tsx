import Color from "../../types/Color";
import "./TRex.css";

interface TRexProps {
	color: Color,
}

const TRex = ({ color }: TRexProps) => {
	return (
		<div className="trex-container">
			<img className="trex" src={color.img} alt="trex" />
		</div>
	);
};

export default TRex;
