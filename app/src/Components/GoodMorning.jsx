import React from "react";

const Greeting = ({ language, fontSize }) => {
  const greetings = {
    english: 'Good Morning!',
    chinese: '早上好！',
    spanish: '¡Buenos días!',
    haitian: 'Bonjou!',
    portuguese: 'Bom dia!',
  };

  const style = {
    fontSize: `${fontSize}px`
  };

  return <h1 style={style}>{greetings[language]}</h1>;
};


export default Greeting;
