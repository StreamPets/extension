import Button from "components/Button";
import TRex from "components/TRex";

const WardrobePreview = ({ selColor, cancelColor, saveColor }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TRex color={selColor} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Button onClick={cancelColor} >Cancel</Button>
        <Button onClick={saveColor} >Save</Button>
      </div>
    </div>
  );
}

export default WardrobePreview;