import React from "react";

const FontButtons = ({ incrementFontSize, decrementFontSize }) => {
  return (
    <ul className="button-row">
      <li><button onClick={incrementFontSize}>+</button></li>
      <li><button onClick={decrementFontSize}>-</button></li>
    </ul>
  );
}

export default FontButtons;
