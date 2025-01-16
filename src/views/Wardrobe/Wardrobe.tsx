import Button from "../../components/Button";
import ItemSelection from "../../components/ItemSelection";
import TRex from "../../components/TRex";
import useSelectItem from "../../hooks/useSelectItem";
import type Item from "../../types/Item";
import "./Wardrobe.css";

interface WardrobeProps {
	currentItem: Item | null;
	updateCurrentItem: (item: Item) => void;
	ownedItems: Item[];
}

const Wardrobe = ({ currentItem, updateCurrentItem, ownedItems }: WardrobeProps) => {
	const { selectedItem, setSelectedItem, cancelItem, saveItem } = useSelectItem(
		currentItem,
		updateCurrentItem,
	);

	return (
		<>
			<div className="wardrobe">
				{selectedItem && <TRex item={selectedItem} />}
				<div className="button-box">
					<Button
						icon={null}
						text="Cancel"
						className="wardrobe-button cancel-button"
						onClick={cancelItem}
					/>
					<Button
						icon={null}
						text="Save"
						className="wardrobe-button save-button"
						onClick={saveItem}
					/>
				</div>
			</div>
			<ItemSelection items={ownedItems} setItem={setSelectedItem} />
		</>
	);
};

export default Wardrobe;
