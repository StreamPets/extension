import { useContext, useEffect, useRef } from "react";
import { postBuyItem } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import Color from "../types/Color";

const useBuyItem = (addOwnedItem: (item: Color) => void) => {
	const { token } = useContext(AuthContext);
	const itemToBuy = useRef<Color | null>(null);

	const onClickBuy = (item: Color) => {
		itemToBuy.current = item;
		window.Twitch.ext.bits.useBits(item.sku);
	};

	useEffect(() => {
		if (!token) {
			return;
		}

		window.Twitch.ext.bits.onTransactionCancelled(() => {
			itemToBuy.current = null;
		});

		window.Twitch.ext.bits.onTransactionComplete(async (transaction) => {
			if (itemToBuy.current) {
				addOwnedItem(itemToBuy.current);
				postBuyItem(
					transaction.transactionReceipt,
					token,
					itemToBuy.current.id,
				);
			}
			itemToBuy.current = null;
		});
	}, [token, addOwnedItem]);

	return { onClickBuy };
};

export default useBuyItem;
