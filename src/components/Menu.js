const Menu = ({ openWardrobe, openStore }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <button onClick={openWardrobe} >Wardrobe</button>
      <button onClick={openStore} >Store</button>
    </div>
  );
}

export default Menu;