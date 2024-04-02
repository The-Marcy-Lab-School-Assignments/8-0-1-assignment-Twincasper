import React from "react";

const Languages = ({ setLanguage }) => {
  return (
    <ul className="language-buttons">
      <li><button onClick={() => setLanguage('english')}>English</button></li>
      <li><button onClick={() => setLanguage('chinese')}>Chinese</button></li>
      <li><button onClick={() => setLanguage('spanish')}>Spanish</button></li>
      <li><button onClick={() => setLanguage('haitian')}>Haitian</button></li>
      <li><button onClick={() => setLanguage('portuguese')}>Portuguese</button></li>
    </ul>
  );
};

export default Languages;
