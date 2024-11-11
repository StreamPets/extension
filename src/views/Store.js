import ColorSwatch from "components/ColorSwatch";

const Store = ({ colors }) => {
  
  // on click -> confirmation popup to buy
  // add color to user's owned colors in database
  // add color to available colors in userdata
    // could reload userData, but waste of api call

  // display greyed out color swatch when bought  

  return (
    <>
      {colors.map(color => <ColorSwatch color={color} setColor={() => {}} />)}
    </>
  );
}

export default Store;