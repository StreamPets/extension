import Button from "./Button";
import BitIcon from 'assets/bit-icon.png';
import Swatch from "./Swatch";

const Item = ({ prev, clickable, onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 8,
        width: 80,
        gap: 8,
      }}
    >
      <img
        style={{
          width: '100%',
          filter: clickable ? 'saturate(1)' : 'saturate(0)',
        }}
        src={prev}
        alt="dino preview"
      />
      {clickable
      ? <Button
          text='Buy'
          icon={BitIcon}
          color='#9147ff'
          hoverColor='#782ce7'
          style={{ width: '100%', gap: 8, padding: 6 }}
          onClick={onClick}
        />
      : <Swatch
          text='Purchased'
          color='#33333a'
          hoverColor='#38383f'
          style={{ width: '100%', gap: 8, padding: 6, paddingBottom: 7 }}
        />
      }
    </div>
  );
}

export default Item;