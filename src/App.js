import { useState } from 'react';

import './App.css';
import { words } from './WordGenerator';
import Keyboard from './components/Keyboard';
import SecretWord from './components/SecretWord';

function App() {
  const [char, setChar] = useState(null);
  const selectChar = letter => {
    setChar(letter);
  };
  return (
    <div className="App">
      <div className="right area">
        <div className="word">
          {' '}
          <SecretWord word={words[0]} char={char} />
        </div>
        <div className="keys">
          <Keyboard selectChar={selectChar} />
        </div>
      </div>
      <div className="left area"></div>
    </div>
  );
}

export default App;
