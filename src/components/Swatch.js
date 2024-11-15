import { useState } from "react";

const Swatch = ({ text, color, hoverColor, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonHoverStyle = {
    backgroundColor: hoverColor,
  };
  
  return (
    <button
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color,
        color: 'white',
        borderWidth: 0,
        borderRadius: 3,
        ...(isHovered ? buttonHoverStyle : {}),
      }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <p style={{ fontSize: 15, margin: 0 }}>
        {text}
      </p>
    </button>
  );
}

export default Swatch;