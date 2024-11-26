import classNames from "classnames";

import "./Button.css";

interface ButtonProps {
	text: string;
	icon: string | null;
	onClick: () => void;
	className: string;
}

const Button = ({ text, icon, onClick, className }: ButtonProps) => {
	return (
		<button className={classNames("button", className)} onClick={onClick}>
			{icon && <img className="icon" src={icon} alt="button icon" />}
			<p className="button-text">{text}</p>
		</button>
	);
};

export default Button;
