import Button from "./Button";
import BitIcon from 'assets/bit-icon.png';

const Item = ({ prev, clickable, onClick }) => {
  return (
    <div
      style={{
        filter: clickable ? 'saturate(1)' : 'saturate(0)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <img
        style={{
          width: 80,
        }}
        src={prev}
        alt="dino preview"
      />
      {clickable ? (
        <Button style={{ padding: 6, gap: 8 }} onClick={onClick} >
          <img style={{ height: 18 }} src={BitIcon} alt="bit icon" />
          <p style={{ margin: 0 }} >Buy</p>
        </Button>
      ) : (
        // TODO: Make 'purchased' swatch
        <Button style={{ padding: 6, height: 30 }} >Purchased</Button>
      )}
    </div>
  );
}

export default Item;