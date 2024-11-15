import Button from "components/Button";
import BitIcon from 'assets/bit-icon.png';

import './Item.css';
import classNames from "classnames";

const Item = ({ prev, clickable, onClick }) => {
  return (
    <div className="item">
      <img className={classNames("item-icon", { "unsaturate": !clickable, })} src={prev} alt="dino preview" />
      {clickable
        ? <Button className="item-button" text="Buy" icon={BitIcon} onClick={onClick} />
        : <button className="item-swatch">
            <p className="swatch-text">{"Purchased"}</p>
          </button>
      }
    </div>
  );
}

export default Item;