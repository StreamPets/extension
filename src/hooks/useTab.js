const { useState } = require("react")

const useTab = () => {
  const [tab, setTab] = useState('wardrobe');

  const openWardrobe = () => {
    setTab('wardrobe');
  }

  const openStore = () => {
    setTab('store');
  }

  return { tab, openWardrobe, openStore };
}

export default useTab;