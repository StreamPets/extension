import { getStoreItems } from "api";
import { useEffect, useState } from "react";

const useStoreItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      await window.Twitch.ext.bits.getProducts();
      const items = await getStoreItems();
      setItems(items);
    };
    
    fetchItems();
  }, []);

  return { items };
}

export default useStoreItems;