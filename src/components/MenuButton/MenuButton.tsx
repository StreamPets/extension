import type { FC, HTMLProps } from "react";
import "./MenuButton.css";

interface MenuButtonProps extends HTMLProps<HTMLButtonElement> {
	text: string;
	isOpen: boolean;
	type?: "button" | "submit" | "reset";
}

const MenuButton: FC<MenuButtonProps> = ({ text, isOpen, type = "button", children, ...rest }) => {
	return (
		<button
			className="menu-button"
			type={type}
			style={{ color: isOpen ? "white" : "grey" }}
			{...rest}
		>
			{children}
			<p>{text}</p>
		</button>
	);
};

export default MenuButton;
