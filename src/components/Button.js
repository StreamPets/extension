import { useState } from "react";

const Button = ({ onClick, children, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonHoverStyle = {
    backgroundColor: 'rgba(145, 70, 255, 0.6)',
  };
  
  return (
    <button
      onClick={onClick}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9146FF',
        color: 'white',
        cursor: 'pointer',
        borderWidth: 0,
        borderRadius: 5,
        transition: 'background-color 0.3s ease',
        ...(isHovered ? buttonHoverStyle : {}),
      }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {children}
    </button>
  );
}

export default Button;