import { useContext, useEffect, useRef } from "react";
import { postBuyItem } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import type Item from "../types/Item";

const useBuyItem = (addOwnedItem: (item: Item) => void) => {
	const { token } = useContext(AuthContext);
	const itemToBuy = useRef<Item | null>(null);

	const onClickBuy = (item: Item) => {
		itemToBuy.current = item;
		window.Twitch.ext.bits.useBits(item.rarity);
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
				postBuyItem(transaction.transactionReceipt, token, itemToBuy.current.id);
			}
			itemToBuy.current = null;
		});
	}, [token, addOwnedItem]);

	return { onClickBuy };
};

export default useBuyItem;
