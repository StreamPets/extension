import { buyItem } from "api";
import TRex from "components/TRex";
import { useEffect, useRef } from "react";

const Store = ({ colors, onBuy, disabledColors }) => {

  const buyColor = useRef(null);
  
  const buy = (color) => {
    buyColor.current = color;
    window.Twitch.ext.bits.useBits(color.sku);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      await window.Twitch.ext.bits.getProducts();
    };
    fetchProducts();

    window.Twitch.ext.bits.onTransactionCancelled(() => {
      buyColor.current = null;
    });

    window.Twitch.ext.bits.onTransactionComplete(async (transaction) => {
      if (buyColor.current) {
        onBuy(buyColor.current);
      }
      buyItem(transaction.transactionReceipt);
      buyColor.current = null;
    });
  }, [onBuy]);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {colors.map(color =>
        disabledColors.find(disabledColor => disabledColor.id === color.id)
        ?
        <div>
          <p>{color.name}</p>
          <TRex
            key={color.id}
            color={color}
            grayscale={true}
          />
        </div>
        :
        <div
          style={{
            cursor: 'pointer',
          }}
          onClick={() => buy(color)}
        >
          <p>{color.name}</p>
          <TRex
            key={color.id}
            color={color}
          />
        </div>
      )}
    </div>
  );
}

export default Store;