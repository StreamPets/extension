import { FaShirt } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import "./Menu.css";
import MenuButton from "../MenuButton";

interface MenuProps {
	tab: string;
	openWardrobe: () => void;
	openStore: () => void;
}

const Menu = ({ tab, openWardrobe, openStore }: MenuProps) => {
	return (
		<div className="menu">
			<MenuButton
				text="Wardrobe"
				onClick={openWardrobe}
				isOpen={tab === "wardrobe"}
				children={<FaShirt size={48} style={{ marginRight: 1 }} />}
			/>
			<MenuButton
				text="Store"
				onClick={openStore}
				isOpen={tab === "store"}
				children={<FaShoppingCart size={48} style={{ marginRight: 6 }} />}
			/>
		</div>
	);
};

export default Menu;
