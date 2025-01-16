import Menu from "../../components/Menu";
import useStoreItems from "../../hooks/useStoreItems";
import useUserData from "../../hooks/useUserData";
import Store from "../Store";
import Wardrobe from "../Wardrobe";
import useTab from "./useTab";
import "./StreamPets.css";

const StreamPets = () => {
	const { tab, openWardrobe, openStore } = useTab();
	const { currentItem, updateCurrentItem, ownedItems, addOwnedItem } = useUserData();
	const { items } = useStoreItems();

	return (
		<div className="stream-pets">
			<Menu tab={tab} openWardrobe={openWardrobe} openStore={openStore} />
			{tab === "wardrobe" && (
				<Wardrobe
					currentItem={currentItem}
					updateCurrentItem={updateCurrentItem}
					ownedItems={ownedItems}
				/>
			)}
			{tab === "store" && (
				<Store items={items} addOwnedItem={addOwnedItem} ownedItems={ownedItems} />
			)}
		</div>
	);
};

export default StreamPets;
