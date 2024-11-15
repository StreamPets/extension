const MenuButton = ({ text, icon, onClick, isOpen, children }) => {
return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '33%',
        borderWidth: 0,
        cursor: 'pointer',
        color: isOpen ? 'white' : 'grey',
      }}
    >
      {children}
      <p style={{ margin: 0 }}>{text}</p>
    </div>
  );
}

export default MenuButton;