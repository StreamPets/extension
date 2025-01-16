import type Item from "../../types/Item";
import type SetState from "../../types/SetState";
import "./ItemSelection.css";

interface ItemSelectionProps {
	items: Item[];
	setItem: SetState<Item | null>;
}

const ItemSelection = ({ items, setItem }: ItemSelectionProps) => {
	const keyFunc = (item: Item) => {
		return (event: React.KeyboardEvent<HTMLImageElement>) => {
			if (event.key === "") {
				setItem(item);
			}
		};
	};

	return (
		<div className="color-selection">
			{items.map((item) => (
				<img
					className="color-icon"
					key={item.id}
					src={item.prev}
					alt="dino preview"
					onClick={() => setItem(item)}
					onKeyDown={keyFunc(item)}
				/>
			))}
		</div>
	);
};

export default ItemSelection;
