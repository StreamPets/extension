import BitIcon from "../../assets/bit-icon.png";

import "./Item.css";
import classNames from "classnames";
import Button from "../Button";

interface ItemProps {
	prev: string;
	clickable: boolean;
	onClick: () => void;
}

const ItemPreview = ({ prev, clickable, onClick }: ItemProps) => {
	return (
		<div className="item">
			<img
				className={classNames("item-icon", { unsaturate: !clickable })}
				src={prev}
				alt="dino preview"
			/>
			{clickable ? (
				<Button className="item-button" text="Buy" icon={BitIcon} onClick={onClick} />
			) : (
				<button type="button" className="item-swatch">
					<p className="swatch-text">{"Purchased"}</p>
				</button>
			)}
		</div>
	);
};

export default ItemPreview;
