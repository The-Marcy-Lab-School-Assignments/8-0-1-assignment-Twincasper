import { useState } from 'react'
import Greeting from './Components/GoodMorning';
import Languages from './Components/Languages';
import FontButtons from './Components/FontButtons';
import './App.css'

const App = () => {
  const [language, setLanguage] = useState('english');
  const [fontSize, setFontSize] = useState(32);

  const incrementFontSize = () => {
    setFontSize(prevSize => prevSize + 1);
  };

  const decrementFontSize = () => {
    setFontSize(prevSize => Math.max(prevSize - 1, 1));
  };

  return (
    <div className="app-container">
      <div className="content-container">
        <FontButtons incrementFontSize={incrementFontSize} decrementFontSize={decrementFontSize} />
        <Greeting language={language} fontSize={fontSize} />
        <Languages setLanguage={setLanguage} />
      </div>
    </div>
  )
}

export default App;
