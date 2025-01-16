import ItemPreview from "../../components/ItemPreview";
import useBuyItem from "../../hooks/useBuyItem";
import type Item from "../../types/Item";
import "./Store.css";

interface StoreProps {
	items: Item[];
	addOwnedItem: (item: Item) => void;
	ownedItems: Item[];
}

const Store = ({ items, addOwnedItem, ownedItems }: StoreProps) => {
	const { onClickBuy } = useBuyItem(addOwnedItem);

	return (
		<div className="store">
			{items.map((item) => (
				<ItemPreview
					key={item.id}
					prev={item.prev}
					clickable={!ownedItems.some((ownedItem) => ownedItem.id === item.id)}
					onClick={() => onClickBuy(item)}
				/>
			))}
		</div>
	);
};

export default Store;
