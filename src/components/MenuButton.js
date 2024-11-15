const MenuButton = ({ text, onClick, isOpen }) => {
return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '33%',
        borderWidth: 0,
        cursor: 'pointer',
        // TODO: Get a lighter grey
        color: isOpen ? 'white' : 'grey',
      }}
    >
      {/* TODO: Add ICONS */}
      <p>ICON</p>
      {text}
    </div>
  );
}

export default MenuButton;