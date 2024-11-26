import "./MenuButton.css";

interface MenuButtonProps {
	text: string;
	onClick: () => void;
	isOpen: boolean;
	children: React.ReactNode;
}

const MenuButton = ({ text, onClick, isOpen, children }: MenuButtonProps) => {
	return (
		<button
			className="menu-button"
			type="button"
			onClick={onClick}
			style={{ color: isOpen ? "white" : "grey" }}
		>
			{children}
			<p>{text}</p>
		</button>
	);
};

export default MenuButton;
