import classNames from "classnames";

import './Button.css';

const Button = ({ text, icon, onClick, className }) => {  
  return (
    <button className={classNames('button', className)} onClick={onClick}>
      {icon && <img className="icon" src={icon} alt="button icon" />}
      <p className="button-text">{text}</p>
    </button>
  );
}

export default Button;