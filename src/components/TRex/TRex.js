import './TRex.css';

const TRex = ({ color })  => {
  return (
    <div className='trex-container'>
      <img className='trex' src={color.img} alt="trex" />
    </div>
  );
}

export default TRex;