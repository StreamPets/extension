import { postBuyItem } from "api";
import { useEffect, useRef } from "react";

const useBuyItem = (addOwnedItem) => {
  const itemToBuy = useRef(null);
  
  const onClickBuy = (item) => {
    itemToBuy.current = item;
    window.Twitch.ext.bits.useBits(item.sku);
  };

  useEffect(() => {
    // const fetchProducts = async () => {
    //   await window.Twitch.ext.bits.getProducts();
    // };
    // fetchProducts();

    window.Twitch.ext.bits.onTransactionCancelled(() => {
      itemToBuy.current = null;
    });

    window.Twitch.ext.bits.onTransactionComplete(async (transaction) => {
      if (itemToBuy.current) {
        addOwnedItem(itemToBuy.current);
      }
      postBuyItem(transaction.transactionReceipt);
      itemToBuy.current = null;
    });
  }, [addOwnedItem]);

  return { onClickBuy };
}

export default useBuyItem;