const TRex = ({ color })  => {
  console.log(color);

  return (
    <img
      style={{
        height: 128,
        width: 128,
      }}
      src={color.img}
      alt="trex">
    </img>
  );
}

export default TRex;