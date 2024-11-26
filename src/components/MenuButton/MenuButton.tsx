import "./MenuButton.css";

const MenuButton = ({ text, onClick, isOpen, children }) => {
	return (
		<div
			className="menu-button"
			onClick={onClick}
			style={{ color: isOpen ? "white" : "grey" }}
		>
			{children}
			<p>{text}</p>
		</div>
	);
};

export default MenuButton;
