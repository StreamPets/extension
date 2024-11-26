import Item from "../../components/Item";
import useBuyItem from "../../hooks/useBuyItem";
import Color from "../../types/Color";
import "./Store.css";

interface StoreProps {
	items: Color[],
	addOwnedColor: (color: Color) => void,
	ownedColors: Color[],
}

const Store = ({ items, addOwnedColor, ownedColors }: StoreProps) => {
	const { onClickBuy } = useBuyItem(addOwnedColor);

	return (
		<div className="store">
			{items.map((color) => (
				<Item
					key={color.id}
					prev={color.prev}
					clickable={
						!ownedColors.some((ownedColor) => ownedColor.id === color.id)
					}
					onClick={() => onClickBuy(color)}
				/>
			))}
		</div>
	);
};

export default Store;
