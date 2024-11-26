import useTab from "./useTab";
import useUserData from "../../hooks/useUserData";
import useStoreItems from "../../hooks/useStoreItems";
import Menu from "../../components/Menu";
import Wardrobe from "../Wardrobe";
import Store from "../Store";
import "./StreamPets.css";

const StreamPets = () => {
	const { tab, openWardrobe, openStore } = useTab();
	const { currentColor, updateCurrentColor, ownedColors, addOwnedColor } = useUserData();
	const { items } = useStoreItems();

	return (
		<div className="stream-pets">
			<Menu tab={tab} openWardrobe={openWardrobe} openStore={openStore} />
			{tab === "wardrobe" && (
				<Wardrobe
					currentColor={currentColor}
					updateCurrentColor={updateCurrentColor}
					ownedColors={ownedColors}
				/>
			)}
			{tab === "store" && (
				<Store
					items={items}
					addOwnedColor={addOwnedColor}
					ownedColors={ownedColors}
				/>
			)}
		</div>
	);
};

export default StreamPets;
