import blueRex from 'assets/dinos/blue-rex.png';
import blackRex from 'assets/dinos/black-rex.png';
import purpleRex from 'assets/dinos/purple-rex.png';
import orangeRex from 'assets/dinos/orange-rex.png';
import greenRex from 'assets/dinos/green-rex.png';
import redRex from 'assets/dinos/red-rex.png';
import pinkRex from 'assets/dinos/pink-rex.png';

const images = {
  blue: blueRex,
  black: blackRex,
  purple: purpleRex,
  orange: orangeRex,
  green: greenRex,
  red: redRex,
  pink: pinkRex,
}

const TRex = ({ color })  => {
  return (
    <img
      style={{
        height: 128,
        width: 128,
      }}
      src={images[color]}
      alt="trex">
    </img>
  );
}

export default TRex;