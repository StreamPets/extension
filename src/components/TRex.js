const TRex = ({ color, grayscale })  => {
  return (
    <img
      style={{
        height: 128,
        width: 128,
        filter: grayscale ? 'saturate(0)' : "saturate(1)"
      }}
      src={color.img}
      alt="trex">
    </img>
  );
}

export default TRex;