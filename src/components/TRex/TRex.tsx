import type Item from "../../types/Item";
import "./TRex.css";

interface TRexProps {
	item: Item;
}

const TRex = ({ item }: TRexProps) => {
	return (
		<div className="trex-container">
			<img className="trex" src={item.img} alt="trex" />
		</div>
	);
};

export default TRex;
