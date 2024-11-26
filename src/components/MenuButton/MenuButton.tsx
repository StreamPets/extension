import type { HTMLProps } from "react";
import "./MenuButton.css";

interface MenuButtonProps extends HTMLProps<HTMLButtonElement> {
	text: string;
	isOpen: boolean;
	type?: "button" | "submit" | "reset";
}

const MenuButton = ({ text, isOpen, children, ...rest }: MenuButtonProps) => {
	return (
		<button
			className="menu-button"
			type="button"
			style={{ color: isOpen ? "white" : "grey" }}
			{...rest}
		>
			{children}
			<p>{text}</p>
		</button>
	);
};

export default MenuButton;
